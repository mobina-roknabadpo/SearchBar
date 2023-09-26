import React from "react";
import Header from "../header/Haeder";
import layout from "./layout.module.css";
import Filter from "../Filter/Filter";
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
