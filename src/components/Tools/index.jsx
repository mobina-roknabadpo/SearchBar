import React from "react";

const Tools = ({ info, search, message, profile }) => {
  return (
    <div className={info}>
      <div>
        <img src="./assets/images/search.png" alt="search" className={search} />
      </div>
      <div>
        <img
          src="./assets/images/message.png"
          alt="message"
          className={message}
        />
      </div>
      <div>
        <img
          src="./assets/images/profile.png"
          alt="profile"
          className={profile}
        />
      </div>
    </div>
  );
};

export default Tools;
