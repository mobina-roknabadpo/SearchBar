import React from "react";
import styles from "./style.module.css";
import InputCheckBox from "../InputCheckBox/index.jsx";

const FilterBox = ({ type, setType }) => {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setType((prev) => [...prev, value]);
    } else {
      setType(type.filter((type) => type !== value));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["filter-container"]}>
        <h2 className={styles.name}>فیلترها</h2>
        <div className={styles.option}>
          <InputCheckBox
            style={styles.movie}
            id="movie"
            value="movie"
            handleChange={handleChange}
            name="فیلم"
          />
          <InputCheckBox
            style={styles.serial}
            id="series"
            value="series"
            handleChange={handleChange}
            name="سریال"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
