import React from "react";
import header from './header.module.css'

const Header = () => {
  return (
    <>
      <header>
        <a href="https://www.namava.ir">
          <img src="./assets/images/Logo.png" alt="namava" className={header.logo} />
        </a>
        <nav>
          <ul className={header.menu}>
            <li className={header.item}>
              <a>خانه</a>
            </li>
            <li className={header.item}>
              <a>فیلم ها</a>
            </li>
            <li className={header.item}>
              <a>سریال ها</a>
            </li>
            <li className={header.item}>
              <a>دسته بندی</a>
            </li>
            <li className={header.item}>
              <a>تازه ها</a>
            </li>
            <li className={header.item}>
              <a>کودکان</a>
            </li>
            <li className={header.item}>
              <a>پردیس نماوا</a>
            </li>
            <li className={header.item}>
              <a>نماوا مگ</a>
            </li>
          </ul>
          <div className={header.info}>
            <div>
              <img src="./assets/images/Search.png" alt="search" className={header.search}/>
            </div>
            <div>
              <img src="./assets/images/Message.png" alt="message" className={header.message}/>
            </div>
            <div>
              <img src="./assets/images/profile.png" alt="profile" className={header.profile}/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
