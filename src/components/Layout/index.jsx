import React from "react";
import Header from "../Header/index.jsx";
import styles from "./style.module.css";
import FilterBox from "../FilterBox/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import "./../../App.css";

const Layout = ({ type, setType, query, setQuery, children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className="container">
          <FilterBox type={type} setType={setType} />
          <div className={styles.resultContainer}>
            <SearchBar query={query} setQuery={setQuery} />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
