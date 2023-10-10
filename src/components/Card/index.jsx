import React from "react";
import styles from "./style.module.css";
import axios from "axios";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({ name, imageUrl, url, id, type }) => {
  const [brief, setBreif] = useState([]);
  const handleMouseOver = async () => {
    await axios
      .get(`https://www.namava.ir/api/v1.0/medias/${id}/brief-preview`)
      .then((Response) => {
        setBreif(Response.data.result);
      })
      .catch((err) => console.log(err));
  };
  const { hit, year } = brief;
  console.log(hit, year, type);
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
