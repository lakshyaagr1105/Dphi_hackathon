import React from "react";
import styles from "./InfoCard.module.css";
const InfoCard = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img
          src="/assets/icons/carbon_notebook-reference.svg"
          alt="notebooks"
        />
        <h2>Prove your skills</h2>
        <p>
          Gain substantial experience by solving real-world problems and pit
          against others to come up with innovative solutions.
        </p>
      </div>
      <div className={styles.card}>
        <img src="/assets/icons/Vector.svg" alt="notebooks" />
        <h2>Learn from community</h2>
        <p>
          One can look and analyze the solutions submitted by the other Data
          Scientists in the community and learn from them.
        </p>
      </div>
      <div className={styles.card}>
        <img src="/assets/icons/Robot.svg" alt="notebooks" />
        <h2>Challenge yourself</h2>
        <p>
          There is nothing for you to lose by participating in a challenge. You
          can fail safe, learn out of the entire experience and bounce back
          harder.
        </p>
      </div>
      <div className={styles.card}>
        <img src="/assets/icons/IdentificationCard.svg" alt="notebooks" />
        <h2>Earn recognition</h2>
        <p>
          You will stand out from the crowd if you do well in AI challenges, it
          not only helps you shine in the community but also earns rewards.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
