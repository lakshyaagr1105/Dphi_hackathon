import React from 'react';
import styles from './ChallengeList.module.css';
import data from '../config/data';
import ChallengeCard from './ChallengeCard';


const ChallengeList = () => {
  return (
  <div className={styles.main}>
  {/* {data.push({id:"q7", title:"ydbsiuabsibuxidush"})} */}
  {console.log(data)}
    {data.map((card) => (
        <ChallengeCard card= {card} key={card.id}/>
    ))}
</div>
  )
}

export default ChallengeList
