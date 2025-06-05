"use client";

import styles from "./Camera.module.css";

type CameraProps = {
  citizen: any;
};

export default function Camera({ citizen }: CameraProps) {
  return (
    <div className={styles.televisionContainer}>
      <div className={styles.border}>
        <div className={styles.television}>
          <img
            src={`./img/${citizen?.image}`}
            alt="Photo du citoyen"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}
