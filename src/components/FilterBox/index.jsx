import React from "react";
import styles from "./style.module.css";

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
          <div className={styles.movie}>
            <input
              type="checkbox"
              id="movie"
              value="movie"
              onChange={handleChange}
            />
            <label htmlFor="movie">فیلم</label>
          </div>
          <div className={styles.serial}>
            <input
              type="checkbox"
              id="series"
              value="series"
              onChange={handleChange}
            />
            <label htmlFor="series">سریال </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
