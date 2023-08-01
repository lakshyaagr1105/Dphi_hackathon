import React from 'react'
import styles from './HeroCard.module.css'
const HeroCards = () => {
  return (
    <div className={styles.bottom}>
        <div className={styles.card}>
          <img src="/assets/icons/Group 1000002515.svg" alt="AI" />
          <div className={styles.submissions}>
            <h3>100K+</h3>
            <p>AI model submissions</p>
          </div>
        </div>
        <span />
        <div className={styles.card}>
          <img src="/assets/icons/Group 1000002516.svg" alt="AI" />
          <div className={styles.submissions}>
            <h3>50K+</h3>
            <p>Data Scientists</p>
          </div>
        </div>
        <span />
        <div className={styles.card}>
          <img src="/assets/icons/Group 1000002518.svg" alt="AI" />
          <div className={styles.submissions}>
            <h3>100+</h3>
            <p>AI Challenges hosted</p>
          </div>
        </div>
    </div>
  )
}

export default HeroCards
