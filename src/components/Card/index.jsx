import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { getDetial } from "../../Services/fetchBriefPreview";
import { MdOutlineSubtitles } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";

const Card = ({ name, imageUrl, url, id, type }) => {
  const [brief, setBrief] = useState({});

  const handleMouseOver = async () => {
    const result = await getDetial(id);
    setBrief(result);
  };
  const { hit, year, imdb, hasPersianSubtitle, dubsType } = brief;
  let dubsTypes = "";

  switch (dubsType) {
    case "ExclusiveDubs":
      dubsTypes = (
        <span>
          <BsFillMicFill /> دوبله نماوا
        </span>
      );
      break;
    case "StudioDubs":
      dubsTypes = (
        <span>
          <BsFillMicFill /> دوبله فارسی
        </span>
      );
    default:
      break;
  }

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
            <span>{hit > 0 && hit + "%"}</span>
          </div>
          <div className={styles.rate}>
            {imdb && (
              <span>
                <strong> IMDB </strong>
                {imdb}
              </span>
            )}
          </div>
          <div className={styles.hasPersianSubtitle}>
            {hasPersianSubtitle && (
              <div>
                <MdOutlineSubtitles className={styles.iconSubTitle} />
                <span>زیر نویس</span>
              </div>
            )}
          </div>
          <div className={styles.dubsType}>{dubsTypes}</div>
        </div>
      </a>
      <span className={styles.title}>{name}</span>
    </div>
  );
};

export default Card;
