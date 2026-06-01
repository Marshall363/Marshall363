export interface PlaceSuggestion {
  id: string;
  name: string;
  iata_code: string | null;
  type: string;
  city_name: string | null;
  iata_country_code: string | null;
}

export interface FlightSegment {
  id: string;
  airline: {
    name: string;
    iata_code: string;
    logo_symbol_url: string | null;
    logo_lockup_url: string | null;
  };
  flight_number: string;
  aircraft: string | null;
  departing_at: string;
  arriving_at: string;
  origin: {
    name: string;
    iata_code: string;
    terminal: string | null;
  };
  destination: {
    name: string;
    iata_code: string;
    terminal: string | null;
  };
  duration: string | null;
  cabin_class: string;
  stops: number;
}

export interface FlightSlice {
  id: string;
  duration: string | null;
  origin: {
    name: string;
    iata_code: string;
    city_name: string | null;
  };
  destination: {
    name: string;
    iata_code: string;
    city_name: string | null;
  };
  segments: FlightSegment[];
  fare_brand_name: string | null;
}

export interface FlightOffer {
  id: string;
  total_amount: string;
  total_currency: string;
  base_amount: string;
  tax_amount: string | null;
  owner: {
    name: string;
    iata_code: string;
    logo_symbol_url: string | null;
    logo_lockup_url: string | null;
  };
  slices: FlightSlice[];
  passengers: number;
  conditions: {
    changeable: boolean;
    refundable: boolean;
  };
  expires_at: string;
}

export interface SearchResponse {
  data: FlightOffer[];
  meta: {
    offer_request_id: string;
    total_offers: number;
    returned_offers: number;
  };
}
