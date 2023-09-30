import React from "react";
import Header from "../Header/Haeder.jsx";
import layout from "./layout.module.css";
import Filter from "../Filter/Filter.jsx";
import ListCards from "../ListCards/ListCards.jsx";
import Empty from "../Empty/Empty.jsx";
import Undefined from "../Undefined/Undefined.jsx";
function Layout({ children, cards, search }) {
  return (
    <>
      <Header />
      <div className={layout.container}>{children}</div>
    </>
  );
  
}

export default Layout;
