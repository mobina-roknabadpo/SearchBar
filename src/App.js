import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import SearchBar from "./components/SearchBar/SearchBar";
const App = () => {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);
  console.log("text", text)
  return (
    <Layout>
      <SearchBar text={text} setText={setText} />
    </Layout>
  );
};

export default App;
