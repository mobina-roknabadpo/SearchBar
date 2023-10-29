import React from "react";
import styles from "./style.module.css";
import QueryNotFoundIcon from "../Icons/QueryNotFound/index.jsx";

const QueryNotFound = () => {
  return (
    <div className={styles.container}>
      <QueryNotFoundIcon />
      <p className={styles.paragraph}>موردی یافت نشد.</p>
    </div>
  );
};

export default QueryNotFound;
