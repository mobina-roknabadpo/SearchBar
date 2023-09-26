import React from "react";
import UndefinedSVG from "../SVGs/UndefinedSVG";
import styles from "./Undefined.module.css";

function Undefined() {
  return (
    <div className={styles.container}>
      <UndefinedSVG />
      <p className={styles.paragraph}>موردی یافت نشد.</p>
    </div>
  );
}

export default Undefined;
