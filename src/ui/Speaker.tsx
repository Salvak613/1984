import styles from "./Speaker.module.css";

type SpeakerProps = {
  citizen: any;
  showMessage: boolean;
};

export default function Speaker({ citizen, showMessage }: SpeakerProps) {
  let message = "";
  if (citizen) {
    message =
      citizen.passeport === 1 || citizen.passeport === true
        ? "Biensur, la voici"
        : "Mince, je ne la trouve pas...";
  }

  return (
    <div className={styles.speakerContainer}>
      <div className={styles.speaker}>
        {citizen && showMessage && (
          <div className={styles.message}>{message}</div>
        )}
      </div>
      <img src="./img/speaker.png" alt="Haut-parleur" className={styles.logo} />
    </div>
  );
}
