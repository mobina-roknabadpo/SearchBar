import React from "react";
import Header from "../Header/Haeder.jsx";
import layout from "./layout.module.css";
import Filter from "../Filter/Filter.jsx";
function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={layout.container}>
        <Filter />
        <div className={layout.flex}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
