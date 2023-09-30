import React from "react";
import styles from "./ListCards.module.css";
import Cards from "../Cards/Cards.jsx";
function ListCards({ cards }) {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Cards key={card.id} name={card.name} imageUrl={card.image_url} url={card.url} type={card.type}/>
      ))}
    </div>
  );
}

export default ListCards;
