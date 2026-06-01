import { NextRequest, NextResponse } from "next/server";
import { duffel } from "@/lib/duffel";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");

  if (!query || query.length < 2) {
    return NextResponse.json({ data: [] });
  }

  try {
    const response = await duffel.suggestions.list({ name: query });

    const places = response.data.map((place) => ({
      id: place.id,
      name: place.name,
      iata_code: place.iata_code,
      type: place.type,
      city_name: place.city_name,
      iata_country_code: place.iata_country_code,
    }));

    return NextResponse.json({ data: places });
  } catch (error) {
    console.error("Places API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}
