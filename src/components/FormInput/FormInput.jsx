import React from "react";
import styles from "./formInput.module.css";
function FormInput({ search, setSearch }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src="./assets/images/SearchIcon.png"
          className={styles.searchIcon}
        />
        <input
          type="text"
          value={search}
          placeholder="فیلم، سریال، بازیگر و ژانر"
          className={styles.formInput}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FormInput;
