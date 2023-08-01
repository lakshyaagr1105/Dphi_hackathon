import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from './AddChallengeForm.module.css'
const AddChallengeForm = () => {
   
  const [challenge, setChallenge] = useState({
    name: "", start: "", end: "", description:"", image:"", level:"",
  });
  const submitHandler = (event) => {
    event.preventDefault();
  }
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setChallenge({...challenge, [name]:value});
  }
  return (
    <div>
      <Navbar />
      <div className= {styles.heading}>Challenge Details</div>
      <form>
        <div className={styles.control}>
          <label>Challenge Name</label>
          <br />
          <input type="text" name="name" value={challenge.name} onChange={handleInputs}/>
        </div>
        <div className={styles.control}>
          <label>Start Date</label>
          <br />
          <input type="date" name="start" value={challenge.start} onChange={handleInputs}/>
        </div>
        <div className={styles.control}>
          <label>End Date</label>
          <br />
          <input type="date" name="end" value={challenge.end} onChange={handleInputs}/>
        </div>
        <div className={styles.control}>
          <label>Description</label>
          <br />
          <textarea name="description" value={challenge.description} onChange={handleInputs}/>
        </div>
        <div className={styles.select}>
          <label>Image</label>
          <br />
          <input name="image" type="image" value={challenge.image} alt="challenge" onChange={handleInputs}/>
        </div>
        <div className={styles.select}>
          <label>Level Type</label>
          <br />
          <input type="text" name="level" value={challenge.level} onChange={handleInputs}/>
        </div>
        <button onClick={submitHandler}>Create Challenge</button>
      </form>
    </div>
  );
};

export default AddChallengeForm;
