import React from "react";
import styles from "./style.module.css";
import EmptyStateIcon from "../Icons/EmptyState/index.jsx";

const EmptyState = () => {
  return (
    <div className={styles.container}>
      <EmptyStateIcon />
      <p className={styles.paragraph}>
        عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق
        فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.
      </p>
    </div>
  );
};

export default EmptyState;
