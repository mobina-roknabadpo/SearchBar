import React, { useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import Empty from "./components/Empty/Empty.jsx";
import Undefined from './components/Undefined/Undefined.jsx'
const App = () => {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);
  console.log("text", text);
  return (
    <Layout>
      <SearchBar text={text} setText={setText} />
      {/* <Empty /> */}
      <Undefined/>
    </Layout>
  );
};

export default App;
