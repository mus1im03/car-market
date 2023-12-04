import React, { useState, useRef, useEffect } from "react";

import * as style from "./Infomode.module.css";

export default function Infomode({ data, name }) {
  const container = useRef();
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    //  if (container.current && !container.current.contains(e.target)) {
    //  setDropdownState({ open: false });
    //  }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.container} ref={container}>
      <button
        type="button"
        className={style.button}
        onClick={handleDropdownClick}
      >
        {name}
      </button>
      {dropdownState.open && (
        <div className={style.dropdown}>
          <ul>
            {data.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
