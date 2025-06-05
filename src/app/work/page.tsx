"use client";

import { useEffect, useState } from "react";
import ButtonPass from "@/ui/ButonPass";
import Manuel from "@/ui/Manuel";
import Camera from "@/ui/Camera";
import CitizenPassport from "@/ui/CitizenPassport";
import Speaker from "@/ui/Speaker";
import Scanner from "@/ui/Scanner";
import FindAffiliation from "@/ui/FindAffiliation";
import { getCitizen } from "@/service/Dynastie1984Service";

export default function WorkPage() {
  const [citizen, setCitizen] = useState<any>(null);
  const [index, setIndex] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      getCitizen(index).then(setCitizen);
    }
  }, [index, gameOver]);

  return (
    <div>
      <img src="/img/logo.png" alt="Logo" className="logo1" />
      <Camera citizen={citizen} />
      <CitizenPassport citizen={citizen} />
      <Speaker citizen={citizen} />
      <Manuel />
      <Scanner citizen={citizen} />
      <FindAffiliation citizen={citizen} />
      <ButtonPass
        citizen={citizen}
        setIndex={setIndex}
        setGameOver={setGameOver}
      />
      {gameOver && <div>Game Over</div>}
    </div>
  );
}
