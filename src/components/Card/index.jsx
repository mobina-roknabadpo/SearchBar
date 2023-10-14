import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { getDetial } from "../../Services/fetchBriefPreview";

const Card = ({ name, imageUrl, url, id, type }) => {
  const [brief, setBreif] = useState([]);
  const handleMouseOver = async () => {
    setBreif(await getDetial(id));
  };
  const { hit, year } = brief;
  return (
    <div className={styles.container}>
      <a href={url} onMouseOver={handleMouseOver} className={styles.image}>
        <img src={imageUrl} alt={name} />
        <div className={styles.detail}>
          <div className={styles.year}>
            <span>{type === "Series" ? "سریال" : "فیلم"} - </span>
            <span>{year}</span>
          </div>
          <div className={styles.score}>
            <FaHeart />
            <span>{hit}%</span>
          </div>
        </div>
      </a>
      <span className={styles.title}>{name}</span>
    </div>
  );
};

export default Card;
