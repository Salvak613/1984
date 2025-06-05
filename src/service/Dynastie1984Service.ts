import { getCitizen as fetchCitizen } from "@/lib/getCitizen";

export async function getCitizen(id: number) {
  return fetchCitizen(id);
}
