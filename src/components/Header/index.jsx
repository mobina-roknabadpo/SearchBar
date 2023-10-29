import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo/index.jsx";
import NavigationBar from "../NavigationBar/index.jsx";

const Header = () => {
  return (
    <>
      <header>
        <Logo logo={styles.logo} />
        <NavigationBar
          menu={styles.menu}
          item={styles.item}
          info={styles.info}
          search={styles.search}
          message={styles.message}
          profile={styles.profile}
        />
      </header>
    </>
  );
};

export default Header;
