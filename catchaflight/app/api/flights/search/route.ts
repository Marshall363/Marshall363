import { NextRequest, NextResponse } from "next/server";
import { duffel } from "@/lib/duffel";
import type { CabinClass } from "@duffel/api/types";

interface SearchRequestBody {
  origin: string;
  destination: string;
  departure_date: string;
  return_date?: string;
  passengers: number;
  cabin_class: string;
}

const VALID_CABIN_CLASSES: CabinClass[] = [
  "economy",
  "premium_economy",
  "business",
  "first",
];

function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

function sanitizeIataCode(code: string): string {
  return code.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 3);
}

export async function POST(request: NextRequest) {
  try {
    const body: SearchRequestBody = await request.json();

    const {
      origin,
      destination,
      departure_date,
      return_date,
      passengers,
      cabin_class,
    } = body;

    if (!origin || !destination || !departure_date) {
      return NextResponse.json(
        { error: "Origin, destination, and departure date are required" },
        { status: 400 }
      );
    }

    const sanitizedOrigin = sanitizeIataCode(origin);
    const sanitizedDestination = sanitizeIataCode(destination);

    if (sanitizedOrigin.length < 3 || sanitizedDestination.length < 3) {
      return NextResponse.json(
        { error: "Invalid airport codes" },
        { status: 400 }
      );
    }

    if (!isValidDate(departure_date)) {
      return NextResponse.json(
        { error: "Invalid departure date" },
        { status: 400 }
      );
    }

    if (return_date && !isValidDate(return_date)) {
      return NextResponse.json(
        { error: "Invalid return date" },
        { status: 400 }
      );
    }

    const passengerCount = Math.min(Math.max(1, passengers || 1), 9);
    const cabinClass = VALID_CABIN_CLASSES.includes(cabin_class as CabinClass)
      ? (cabin_class as CabinClass)
      : "economy";

    const slices = [
      {
        origin: sanitizedOrigin,
        destination: sanitizedDestination,
        departure_date,
        arrival_time: null,
        departure_time: null,
      },
    ];

    if (return_date) {
      slices.push({
        origin: sanitizedDestination,
        destination: sanitizedOrigin,
        departure_date: return_date,
        arrival_time: null,
        departure_time: null,
      });
    }

    const passengersList = Array.from({ length: passengerCount }, () => ({
      type: "adult" as const,
    }));

    const response = await duffel.offerRequests.create({
      slices,
      passengers: passengersList,
      cabin_class: cabinClass,
      return_offers: true,
    });

    const offers = (response.data.offers || []).slice(0, 20).map((offer) => ({
      id: offer.id,
      total_amount: offer.total_amount,
      total_currency: offer.total_currency,
      base_amount: offer.base_amount,
      tax_amount: offer.tax_amount,
      owner: {
        name: offer.owner.name,
        iata_code: offer.owner.iata_code,
        logo_symbol_url: offer.owner.logo_symbol_url,
        logo_lockup_url: offer.owner.logo_lockup_url,
      },
      slices: offer.slices.map((slice) => ({
        id: slice.id,
        duration: slice.duration,
        origin: {
          name: slice.origin.name,
          iata_code: slice.origin.iata_code,
          city_name: "city_name" in slice.origin ? slice.origin.city_name : slice.origin.name,
        },
        destination: {
          name: slice.destination.name,
          iata_code: slice.destination.iata_code,
          city_name: "city_name" in slice.destination ? slice.destination.city_name : slice.destination.name,
        },
        segments: slice.segments.map((seg) => ({
          id: seg.id,
          airline: {
            name: seg.operating_carrier.name,
            iata_code: seg.operating_carrier.iata_code,
            logo_symbol_url: seg.operating_carrier.logo_symbol_url,
            logo_lockup_url: seg.operating_carrier.logo_lockup_url,
          },
          flight_number: `${seg.marketing_carrier.iata_code}${seg.marketing_carrier_flight_number}`,
          aircraft: seg.aircraft?.name || null,
          departing_at: seg.departing_at,
          arriving_at: seg.arriving_at,
          origin: {
            name: seg.origin.name,
            iata_code: seg.origin.iata_code,
            terminal: seg.origin_terminal,
          },
          destination: {
            name: seg.destination.name,
            iata_code: seg.destination.iata_code,
            terminal: seg.destination_terminal,
          },
          duration: seg.duration,
          cabin_class: seg.passengers?.[0]?.cabin_class || cabinClass,
          stops: seg.stops?.length || 0,
        })),
        fare_brand_name: slice.fare_brand_name,
      })),
      passengers: offer.passengers.length,
      conditions: {
        changeable: !!offer.conditions?.change_before_departure?.allowed,
        refundable: !!offer.conditions?.refund_before_departure?.allowed,
      },
      expires_at: offer.expires_at,
    }));

    return NextResponse.json({
      data: offers,
      meta: {
        offer_request_id: response.data.id,
        total_offers: response.data.offers?.length || 0,
        returned_offers: offers.length,
      },
    });
  } catch (error: unknown) {
    console.error("Flight search error:", error);

    if (
      error &&
      typeof error === "object" &&
      "meta" in error &&
      error.meta &&
      typeof error.meta === "object" &&
      "status" in error.meta
    ) {
      const duffelError = error as { meta: { status: number }; errors: { message: string }[] };
      return NextResponse.json(
        {
          error: "Flight search failed",
          details: duffelError.errors?.map((e) => e.message) || [],
        },
        { status: duffelError.meta.status }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
