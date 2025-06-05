import styles from "./CitizenPassport.module.scss";
import { useState, useEffect, useRef } from "react";
import { scramble } from "@/utils/scramble";

type CitizenInformationsProps = {
  citizen: any;
  setShowSpeakerMessage: (show: boolean) => void;
};

export default function CitizenInformations({
  citizen,
  setShowSpeakerMessage,
}: CitizenInformationsProps) {
  if (!citizen) return null;

  const [showDialog, setShowDialog] = useState(false);
  const [showPassport, setShowPassport] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const passportRef = useRef<HTMLDivElement | null>(null);

  const passportMessages = [
    { text: "--- Passeport ---", delay: 0 },
    { text: `Nom: ${citizen.nom}`, delay: 1000 },
    { text: `Âge: ${citizen.age}`, delay: 2000 },
    { text: `Profession: ${citizen.profession}`, delay: 3000 },
    { text: `Origine: ${citizen.origine}`, delay: 4000 },
    {
      text: `Numéro de carte d'identité: ${citizen.numeroPasseport}`,
      delay: 5000,
    },
  ];

  useEffect(() => {
    setShowDialog(false);
    setShowPassport(false);
    setShowSpeakerMessage(false);
    setAnalyzing(false);
  }, [citizen, setShowSpeakerMessage]);

  const handleRequestPassport = () => {
    setShowDialog(true);
    setShowSpeakerMessage(true);
    setShowPassport(true);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      if (citizen.passeport !== 1) {
        setShowPassport(false);
      }
      setShowDialog(false);
    }, 7000);
  };

  useEffect(() => {
    if (showPassport && citizen.passeport === 1 && passportRef.current) {
      const paragraphs = passportRef.current.querySelectorAll("p");
      passportMessages.forEach((data, idx) => {
        const element = paragraphs[idx];
        if (element) {
          element.textContent = "";
          scramble(element, data.text, { delay: data.delay });
        }
      });
    }
  }, [showPassport, citizen]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleRequestPassport}>
        <span className={styles["button-inside"]}>
          Demander la carte d'identité
        </span>
      </button>
      <div className={styles.screen}>
        {analyzing && <div className={styles.dialog}>Analyse en cours</div>}
        {showPassport && citizen.passeport === 1 && (
          <div className={styles.passport} ref={passportRef}>
            {passportMessages.map((msg, idx) => (
              <p key={idx}></p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
