import React from "react";
import styles from "./filter.module.css";

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles['filter-container']}>
        <h2 className={styles.name}>فیلترها</h2>
        <div className={styles.option}>
          <div className={styles.movie}>
            <input type="checkbox" id="movie" />
            <label htmlFor="movie">فیلم</label>
          </div>
          <div className={styles.serial}>
            <input type="checkbox" id="serial" />
            <label htmlFor="serial">سریال </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
