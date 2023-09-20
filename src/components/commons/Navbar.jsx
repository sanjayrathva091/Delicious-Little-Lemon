import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "../../App.css";

export const NavLinks = () => {
  return (
    <ul>
      {NavData.map(({ id, menu, path }) => (
        <Link key={id} to={path} className="App-link">
          <li>{menu}</li>
        </Link>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="sidebar">
      <div>
        <span onClick={() => setIsOpen((prevState) => !prevState)}>
          {isOpen ? (
            <AiOutlineClose size={40} fontWeight={500} />
          ) : (
            <GiHamburgerMenu size={40} fontWeight={500} />
          )}
        </span>
      </div>
      <nav className={isOpen ? "Mobile-nav" : "Mobile-nav-close"}>
        {/* <hr /> */}
        {<NavLinks />}
      </nav>
    </div>
  );
};

const Navbar = () => {
  return (
    <header>
      <div className="App-logo">
        <img src={AppLogo} alt="app-logo" />
      </div>
      <nav className="Desktop-nav">{<NavLinks />}</nav>
      <Sidebar />
    </header>
  );
};

export default Navbar;

export const NavData = [
  {
    id: 1,
    menu: "Home",
    path: "/",
  },
  {
    id: 2,
    menu: "About",
    path: "/about",
  },
  {
    id: 3,
    menu: "Services",
    path: "/services",
  },
  {
    id: 4,
    menu: "Menu",
    path: "menu",
  },
  {
    id: 5,
    menu: "Reservation",
    path: "/reservation",
  },
  {
    id: 6,
    menu: "Order Online",
    path: "/order-online",
  },
  {
    id: 7,
    menu: "Login",
    path: "/login",
  },
];
