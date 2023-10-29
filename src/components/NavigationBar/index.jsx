import React from "react";
import { listItems } from "./listItems";
import Tools from "../Tools/index.jsx";

const NavigationBar = ({ menu, item, info, search, message, profile }) => {
  return (
    <>
      <nav>
        <ul className={menu}>
          {listItems.map((i) => (
            <li className={item} key={i.id}>
              <a>{i.name}</a>
            </li>
          ))}
        </ul>
        <Tools
          info={info}
          search={search}
          message={message}
          profile={profile}
        />
      </nav>
    </>
  );
};

export default NavigationBar;
