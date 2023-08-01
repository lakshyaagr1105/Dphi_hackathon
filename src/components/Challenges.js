import React from "react";
import ChallengeList from "./ChallengeList";
import Filter from "./Filter";


// import styles from "./Challenges.module.css";
import Search from "./Search";

const Challenges = () => {
  return (
    <>
    <Search />
    <ChallengeList/>
    {/* <Filter/> */}
    </>
  );
};

export default Challenges;
