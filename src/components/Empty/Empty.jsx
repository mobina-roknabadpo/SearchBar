import React from "react";
import EmptySVG from "../SVGs/EmptySVG.jsx";
import styles from "./empty.module.css";

function Empty() {
  return (
    <div className={styles.container}>
      <EmptySVG />
      <p className={styles.paragraph}>
        عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق
        فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.
      </p>
    </div>
  );
}

export default Empty;
