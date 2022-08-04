import { useState } from "react";
import "./css/Navbar.css";
import { FaHamburger } from 'react-icons/fa';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <span className="nav-logo"><FaHamburger className="burger-ico"/>The Corner</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#events">Promoções</a>
        <a href="#book">Entregas</a>
        <a href="#footer">Contacte-nos</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
