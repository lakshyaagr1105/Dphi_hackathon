import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import styles from "./Filter.module.css";
import data from "../config/data";
import ChallengeCard from "./ChallengeCard";
// import styles from './ChallengeList.module.css';

const Filter = () => {
  const [items, setItem] = useState(data);
  const filterItem = (categItem) => {
    const updatedItems = data
      .filter((curElem) => {
        return curElem.state === categItem;
      })
      .map((curElem) => (
     console.log(curElem)
      ));
    setItem(updatedItems);
  };

  const filter = (levelItem) => {
    const newItems = items.filter((element) => {
      return element.level === levelItem;
    });
    setItem(newItems);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>
      <div className={styles.parent}>
        <Dropdown.Menu>
          <div className={styles.parent}>
            <p>Status</p>
            <Form.Check
              aria-label="option 1"
              label="All"
              onChange={() => setItem(data)}
            />
            <Form.Check
              aria-label="option 1"
              label="Upcoming"
              onChange={() => filterItem("Upcoming")}
            />
            <Form.Check
              aria-label="option 1"
              label="Active"
              onChange={() => filterItem("Active")}
            />
            <Form.Check
              aria-label="option 1"
              label="Past"
              onChange={() => filterItem("Past")}
            />
          </div>
          <hr />
          <div className={styles.parent}>
            <p className={styles.parent}>Level</p>
            <Form.Check
              aria-label="option 1"
              label="Easy"
              onChange={() => filter("Easy")}
            />
            <Form.Check
              aria-label="option 1"
              label="Medium"
              onChange={() => filter("Medium")}
            />
            <Form.Check
              aria-label="option 1"
              label="Hard"
              onChange={() => filter("Hard")}
            />
          </div>
        </Dropdown.Menu>
      </div>
    </Dropdown>
  );
};

export default Filter;
