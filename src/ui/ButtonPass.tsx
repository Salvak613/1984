import styles from "./AskSlogan.module.scss";
import React, { useState } from "react";
import Speaker from "./Speaker";

type ButtonPassProps = {
  onSlogan: (newSlogan: string) => void;
  citizen: { slogan: string };
};

const ButtonPass: React.FC<ButtonPassProps> = ({ onSlogan, citizen }) => {
  return (
    <button onClick={() => onSlogan(citizen.slogan)}>Passer le slogan</button>
  );
};

export default ButtonPass;
