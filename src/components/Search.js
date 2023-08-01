import React from 'react'
import styles from './Search.module.css';
// import CheckboxesGroup from './Filter';
import Filter from './Filter';
const Search = () => {
  return (
    <>
    <h1>Explore Challenges</h1>
    <div className={styles.main}>
      <div className={styles.search}>
        <img src="/assets/icons/carbon_search.png" />
        <input type="search" class={styles.inp} />
      </div>
      <Filter />
    </div>
    </>
  )
}

export default Search
