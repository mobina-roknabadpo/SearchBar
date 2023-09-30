import React, { useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter/Filter.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
const App = () => {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);
  const [select, setSelect] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (search.length > 0) {
      getMovies();
    }
  }, [search, select]);

  let type = select.length === 0 || select.length === 2 ? "all" : select[0];
  console.log(search);
  async function getMovies() {
    await axios
      .get(
        `https://www.namava.ir/api/v3.0/search/advance?type=${type}&count=20&page=${page}&query=${search}`
      )
      .then((response) => {
        const result = response.data.result.result_items[0].groups.Media.items;
        console.log(result);
        setCards(result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Layout cards={cards} search={search}>
      <div className="container">
        <Filter select={select} setSelect={setSelect} />
        <SearchBar search={search} setSearch={setSearch} cards={cards} />
      </div>
    </Layout>
  );
};

export default App;
