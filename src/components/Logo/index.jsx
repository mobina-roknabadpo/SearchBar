import React from "react";

const Logo = ({ logo }) => {
  return (
    <>
      <a href="https://www.namava.ir">
        <img src="./assets/images/logo.png" alt="namava" className={logo} />
      </a>
    </>
  );
};

export default Logo;
