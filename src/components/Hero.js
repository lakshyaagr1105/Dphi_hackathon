import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../components/Navbar";
import HeroCards from "./HeroCards";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <h1>Accelerate Innovation with Global AI Challenges</h1>
          <p>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
         <Link to="/form"><button>Create Challenge</button></Link>
        </div>

        <img className={styles.right} src="/assets/hero.png" alt="hero" />
      </div>
      <HeroCards />
    </>
  );
};

export default Hero;
