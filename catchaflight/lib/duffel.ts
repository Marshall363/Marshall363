import { Duffel } from "@duffel/api";

if (!process.env.DUFFEL_API_TOKEN) {
  throw new Error("DUFFEL_API_TOKEN environment variable is not set");
}

export const duffel = new Duffel({
  token: process.env.DUFFEL_API_TOKEN,
});
