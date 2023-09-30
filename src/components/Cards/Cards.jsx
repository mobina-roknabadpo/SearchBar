import React from "react";
import styles from "./cards.module.css";
function Cards({ name, imageUrl, url, type }) {
  return (
    <div className={styles.container}>
      <a href={url}>
        <img src={imageUrl} alt={name} />
      </a>
      <h3 className={styles.title}>{name}</h3>
    </div>
  );
}

export default Cards;
