import React from "react";
import styles from "./searchBar.module.css";
const SearchBar = ({ text, setText }) => {
  return (
    <div className={styles.container}>
      <img src="./assets/images/SearchIcon.png" className={styles.searchIcon} />
      <input
        type="text"
        value={text}
        placeholder="فیلم، سریال، بازیگر و ژانر"
        className={styles.formInput}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
