import { NextRequest, NextResponse } from "next/server";
import airportsData from "@/data/airports.json";
import type { PlaceSuggestion } from "@/lib/types";

interface Airport {
  iata: string;
  icao: string;
  name: string;
  city: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  timezone: string;
  type: string;
}

const airports: Airport[] = airportsData as Airport[];

// Pre-filter airports that have an IATA code
const airportsWithIata = airports.filter((a) => a.iata && a.iata.trim() !== "");

function mapToPlaceSuggestion(airport: Airport): PlaceSuggestion {
  return {
    id: airport.iata,
    name: airport.name,
    iata_code: airport.iata,
    type: airport.type,
    city_name: airport.city,
    iata_country_code: airport.country_code,
  };
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");

  if (!query || query.length < 2) {
    return NextResponse.json({ data: [] });
  }

  const lowerQuery = query.toLowerCase();

  const iataExact: Airport[] = [];
  const cityMatches: Airport[] = [];
  const nameMatches: Airport[] = [];
  const countryMatches: Airport[] = [];

  for (const airport of airportsWithIata) {
    if (airport.iata.toLowerCase() === lowerQuery) {
      iataExact.push(airport);
    } else if (airport.city.toLowerCase().includes(lowerQuery)) {
      cityMatches.push(airport);
    } else if (airport.name.toLowerCase().includes(lowerQuery)) {
      nameMatches.push(airport);
    } else if (airport.country.toLowerCase().includes(lowerQuery)) {
      countryMatches.push(airport);
    }
  }

  const combined = [...iataExact, ...cityMatches, ...nameMatches, ...countryMatches];
  const results = combined.slice(0, 8).map(mapToPlaceSuggestion);

  return NextResponse.json({ data: results });
}
