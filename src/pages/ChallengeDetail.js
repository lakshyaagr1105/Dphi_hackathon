import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Chip from "../components/Chip";
import Navbar from "../components/Navbar";
import data from "../config/data";
import styles from "./ChallengeDetail.module.css";
const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    let challenge = data.find((challenge) => challenge.id === (id));
    if (challenge) {
      setChallenge(challenge);
    }
  }, []);
  return (
    <>
    {challenge &&
      <div>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.time}>
          <img src="/assets/icons/Group_clock.svg" alt="clock" />
          <p>Starts on 17th Jun'22 09:00 PM (India Standard Time)</p>
        </div>
        <h1>{challenge.title}</h1>
        <p>{challenge.description}</p>
        <Chip label={challenge.level} />
      </div>
      <div className={styles.bar}>
        <p>Overview</p>
        <div classname={styles.function}>
          <button className={styles.edit}>Edit</button>
          <button className={styles.delete}>Delete</button>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
        </p>

        <p>
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
        </p>

        <p>
          Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.
        </p>
      </div>
      </div>
    }
    </>
  );
};

export default ChallengeDetail;
