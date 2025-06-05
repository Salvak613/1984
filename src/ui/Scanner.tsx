import styles from "./Scanner.module.scss";
import React, { useState } from "react";

type ScannerProps = {
  citizen?: { notes?: string };
};

export default function Scanner({ citizen }: ScannerProps) {
  const [showNotes, setShowNotes] = useState(false);
  const [displayedNotes, setDisplayedNotes] = useState("");

  const handleAskColleague = () => {
    setShowNotes(true);
    if (citizen?.notes) {
      setDisplayedNotes(""); // reset
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedNotes(citizen.notes!.slice(0, i + 1));
        i++;
        if (i >= citizen.notes!.length) {
          clearInterval(interval);
        }
      }, 40);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={handleAskColleague}
      >
        <span className={styles["button-inside"]}>
          DEMANDER A VOTRE COLLEGUE CE QU'IL EN PENSE
        </span>
      </button>
      {showNotes && <div className={styles.bubble}>{displayedNotes}</div>}
    </div>
  );
}
