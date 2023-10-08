import React from "react";
import styles from "./style.module.css";

const Card = ({ name, imageUrl, url }) => {
  return (
    <div className={styles.container}>
      <a href={url}>
        <img src={imageUrl} alt={name} />
      </a>
      <span className={styles.title}>{name}</span>
    </div>
  );
};

export default Card;
