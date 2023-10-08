import React from "react";
import styles from "./style.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Loading;
