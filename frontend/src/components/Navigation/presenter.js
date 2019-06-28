import React from "react";
import IosArrowRoundBack from "react-ionicons/lib/IosArrowRoundBack";
import "./styles.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__cols">
        <li className="nav__col">
          <span className="back">
            <IosArrowRoundBack />
          </span>
          <span className="name">똑똑이</span>
        </li>
        <li className="nav__col">
          <span className="menu">메뉴</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
