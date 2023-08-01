import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 60);
    }, 60);
  }, [time]);

  const getFormattedTime = (seconds) => {
    // let total_seconds = parseInt(Math.floor(milliseconds/1000));
    let total_minutes = parseInt(Math.floor(seconds/1000));
    let total_hours = parseInt(Math.floor(total_minutes/60));
    let days = parseInt(Math.floor(total_hours/60));

    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 60);

    return`${days}: ${hours}: ${minutes}` ;
  }
  return <div className={styles.time}>{getFormattedTime(time)}</div>;
};

export default Timer;
