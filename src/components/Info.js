import React from "react";
import styles from "./Info.module.css";
import InfoCard from "./InfoCard";
const Info = () => {
  return (
    <div className={styles.main}>
      <h1>
        Why Participate in <span className={styles.green}>AI Challenges?</span>
      </h1>
      <InfoCard />
    </div>
  );
};

export default Info;
