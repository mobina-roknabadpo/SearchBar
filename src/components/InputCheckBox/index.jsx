import React from "react";

const InputCheckBox = ({ style, id, value, handleChange, name }) => {
  return (
    <div className={style}>
      <input type="checkbox" id={id} value={value} onChange={handleChange} />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default InputCheckBox;
