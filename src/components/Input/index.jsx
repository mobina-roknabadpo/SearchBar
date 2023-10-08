import React from "react";
import styles from "./style.module.css";

function Input({ query, setQuery }) {
  const clearInput = () => {
    setQuery("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src="./assets/images/searchIcon.png"
          className={styles.searchIcon}
        />
        <input
          type="text"
          value={query}
          placeholder="فیلم، سریال، بازیگر و ژانر"
          className={styles.formInput}
          onChange={(e) => setQuery(e.target.value)}
        />
        {!!query && (
          <img
            src="./assets/images/cross.png"
            className={styles.close}
            onClick={clearInput}
          />
        )}
      </div>
    </div>
  );
}

export default Input;
