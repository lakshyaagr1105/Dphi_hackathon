import React from 'react';
import styles from './Chip.module.css';
const Chip = ({label}) => {
    return (
      <div className={styles.chip}>
        <img src= {process.env.PUBLIC_URL + "/assets/icons/carbon_skill-level-basic.svg"} alt="skill"/>
        <p>{label}</p>
      </div>
    )
  }

export default Chip
