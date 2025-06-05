import styles from "./Speaker.module.scss";
import React, { useEffect, useState } from "react";

type SpeakerProps = {
  citizen: any;
};

export default function Speaker({ citizen }: SpeakerProps) {
  const [message, setMessage] = useState("");
  const [vibrating, setVibrating] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleAskSlogan = () => {
    if (citizen && citizen.slogan) {
      setMessage(citizen.slogan);
      setVisible(true);
      setVibrating(true);
      setTimeout(() => setVibrating(false), 2000);
      setTimeout(() => setVisible(false), 3000);
    }
  };

  return (
    <div className={styles.speakerContainer}>
      <button className={styles.button} type="button" onClick={handleAskSlogan}>
        <span className={styles["button-inside"]}>
          Demander d'énoncer l'un des 3 slogans
        </span>
      </button>
      <img
        src="./img/speaker.png"
        alt="Haut-parleur"
        className={`${styles.logo} ${vibrating ? styles.vibration : ""}`}
      />

      <div className={styles.speaker}>
        {visible && message && <div className={styles.message}>{message}</div>}
      </div>
    </div>
  );
}
