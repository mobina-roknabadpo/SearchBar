import React from "react";
import styles from "./searchBar.module.css";
import FormInput from "../FormInput/FormInput.jsx";
import ListCards from "../ListCards/ListCards.jsx";
import Undefined from "../Undefined/Undefined.jsx";
import Empty from "../Empty/Empty.jsx";
function SearchBar({ search, setSearch, cards }) {
  return (
    <div className={styles.container}>
      <FormInput search={search} setSearch={setSearch} />
      {!!search.length && !cards.length && <Undefined />}
      {search === "" ? <Empty /> : <ListCards cards={cards} />}
    </div>
  );
}

export default SearchBar;
