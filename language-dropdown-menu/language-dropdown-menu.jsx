import React, { useRef, useContext, useState  }  from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./language-dropdown-menu.styles.scss";
import { Context } from "../intl-wrapper/intl-wrapper.component";

const LanguageDropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const context = useContext(Context);
  const [currentLanguage, setCurrentLanguage] = useState(navigator.language);

  const options = [
    {value: "bg-BG", label: "Български" },
    {value: "en", label: "English" }
  ].map((option, index) => <li key={index} onClick={() => setLanguage(option)} >
  {option.label} 
  </li>);

  const setLanguage = (option) => {
    setCurrentLanguage(option.value)
    context.selectLanguage(option.value)
  }

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
        {/* <span>{currentLanguage}</span> */}
        <div class="globe"/>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            {options}
          </ul>
        </nav>
      </div>
    </div>
  );
}
  

export default LanguageDropdownMenu;
