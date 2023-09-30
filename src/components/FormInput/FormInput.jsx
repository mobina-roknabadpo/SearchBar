import React from "react";
import styles from "./formInput.module.css";
import Empty from "../Empty/Empty.jsx";
import { useState } from "react";
function FormInput({ search, setSearch, setCards }) {
  const handleClose = () => {
    setCards([]);
    setSearch("");
  };
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
        {!!search && (
          <img
            src="./assets/images/cross.png"
            className={styles.close}
            onClick={handleClose}
          />
        )}
      </div>
    </div>
  );
}

export default FormInput;
