import style from "./FindAffiliation.module.scss";
import React, { useState, useEffect } from "react";

type FindAffiliationProps = {
  citizen?: { affiliation?: string };
};

export default function FindAffiliation({ citizen }: FindAffiliationProps) {
  const [showAffiliation, setShowAffiliation] = useState(false);

  const handleShowAffiliation = () => {
    setShowAffiliation(true);
  };

  useEffect(() => {
    setShowAffiliation(false);
  }, [citizen]);

  return (
    <div className={style.findAffiliationContainer}>
      <button
        className={style.button}
        type="button"
        onClick={handleShowAffiliation}
        style={{ marginTop: 16 }}
      >
        <span className={style["button-inside"]}>
          Trouver son soutient politique dans les archives ministerielles
        </span>
      </button>
      {showAffiliation && citizen?.affiliation && (
        <div className={style.affiliation}>{citizen.affiliation}</div>
      )}
    </div>
  );
}
