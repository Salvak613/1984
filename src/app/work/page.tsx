"use client";

import { useEffect, useState } from "react";
import ButtonPass from "@/ui/ButonPass";
import Camera from "@/ui/Camera";
import CitizenPassport from "@/ui/CitizenPassport";
import Speaker from "@/ui/Speaker";
import { getCitizen } from "@/service/Dynastie1984Service";

export default function WorkPage() {
  const [citizen, setCitizen] = useState<any>(null);
  const [index, setIndex] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [showSpeakerMessage, setShowSpeakerMessage] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      getCitizen(index).then(setCitizen);
    }
  }, [index, gameOver]);

  return (
    <div>
      <Camera citizen={citizen} />
      <CitizenPassport
        citizen={citizen}
        setShowSpeakerMessage={setShowSpeakerMessage}
      />
      <Speaker citizen={citizen} showMessage={showSpeakerMessage} />
      <ButtonPass
        citizen={citizen}
        setIndex={setIndex}
        setGameOver={setGameOver}
      />
      {gameOver && <div>Game Over</div>}
    </div>
  );
}
