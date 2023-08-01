import React from "react";
import styles from "./ChallengeCard.module.css";
import Timer from "./Timer";
import { Link } from 'react-router-dom'
const ChallengeCard = ({ card: { id,level,src, state,time, title} }) => {
  return (
    <>
      <div className={styles.main}>
        <img src={src} alt="pic1" />
        <div className={styles.bottom}>
          <span>{state}</span>
          <h5>{title}</h5>
          <span> Starts in</span>
          <Timer duration={2 * 24 * 60 * 60} />
          <div className={styles.time}>
            <span>Days</span>
            <span>Hours</span>
            <span>Mins</span>
          </div>
          <Link target="_blank" className = {styles.participate} to= {`/challenge/${id}`}>Participate Now</Link>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;
