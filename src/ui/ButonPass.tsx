"use client";

import styles from "./ButtonPass.module.css";

type ButtonPassProps = {
  citizen: any;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonPass({
  citizen,
  setIndex,
  setGameOver,
}: ButtonPassProps) {
  const Pass = () => {
    if (!citizen) return;
    if (citizen.valide === true || citizen.valide === 1) {
      setIndex((prev) => prev + 1);
    } else {
      setGameOver(true);
    }
  };

  const Arrest = () => {
    if (!citizen) return;
    if (citizen.valide === false || citizen.valide === 0) {
      setIndex((prev) => prev + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <>
      <button onClick={Pass} className={styles.button}>
        Pass
      </button>
      <button onClick={Arrest} className={styles.button}>
        Arrest
      </button>
    </>
  );
}
