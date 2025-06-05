import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { infoMessages } from "@/data/responseMessages";
import { Dynastie1984Model } from "@/model/dynastie1984Model";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const dynastie1984Id = await parseInt(params.id, 10);
  if (isNaN(dynastie1984Id)) {
    return NextResponse.json(
      { error: infoMessages.invalidId },
      { status: 400 }
    );
  }

  try {
    const [rows] = await db.query(
      "SELECT id, nom, age, profession, origine, affiliation, passeport, numeroPasseport, slogan, image, notes, valide FROM citoyens WHERE id = ?",
      [dynastie1984Id]
    );
    const results = Array.isArray(rows) ? (rows as Dynastie1984Model[]) : [];

    if (results.length === 0) {
      return NextResponse.json(
        { error: infoMessages.notFound },
        { status: 404 }
      );
    }

    return NextResponse.json(results[0]);
  } catch (error) {
    console.error("Erreur MySQL (GET /api/dynastie1984/[id]) :", error);
    return NextResponse.json({ error: infoMessages.server }, { status: 500 });
  }
}
