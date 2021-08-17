import React from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavLink(props) {
  return <div className={props.className}>{props.children}</div>;
}
function NavBarDesktop(props) {
  return (
    <nav className="nav-desktop">
      <div className="nav-desktop-left">
        <NavLink className="nav-desktop-link">Features</NavLink>
        <NavLink className="nav-desktop-link">Pricing</NavLink>
        <NavLink className="nav-desktop-link">Resources</NavLink>
      </div>
      <div className="nav-desktop-right">
        <NavLink className="nav-desktop-link">Login</NavLink>
        <NavLink className="nav-desktop-signUp">Sign Up</NavLink>
      </div>
    </nav>
  );
}
function NavMenu(props) {
  return (
    <nav className="nav-menu">
      <NavLink className="nav-menu-link">Features</NavLink>
      <NavLink className="nav-menu-link">Pricing</NavLink>
      <NavLink className="nav-menu-link">Resources</NavLink>
      <div className="white-line"></div>
      <NavLink className="nav-menu-link">Login</NavLink>
      <NavLink className="nav-menu-signUp">Sign Up</NavLink>
    </nav>
  );
}
function MenuIcon(props) {
  const [menu, SetMenu] = React.useState(false);

  function handleOnClick() {
    SetMenu(!menu);
  }
  return (
    <div className="menu">
      <div className="menu-icon" onClick={handleOnClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {menu ? props.children : ""}
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <div className="title">Shortly</div>
      <div className="nav">
        <NavBarDesktop />
        <MenuIcon>
          <NavMenu />
        </MenuIcon>
      </div>
    </header>
  );
}
