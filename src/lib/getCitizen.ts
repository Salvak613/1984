import { infoMessages } from "@/data/responseMessages";
import { apiRoutes } from "@/data/ROUTES";
import { Dynastie1984Model } from "@/model/dynastie1984Model";

export async function getCitizen(id: number): Promise<Dynastie1984Model> {
  const res = await fetch(`${apiRoutes.DYNASTIE1984}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (res.status === 404) {
    throw new Error(infoMessages.notFound || "Information non trouvée");
  }

  if (!res.ok) {
    throw new Error(infoMessages.error);
  }

  return res.json();
}
