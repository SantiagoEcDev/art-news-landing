import "./Navbar.css";
import LogoArtjunks from "./Logo-Artjunks.png";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className="header-nav">
      <a className="header-nav-logo" href="#">
        <img src={LogoArtjunks} alt="" />
      </a>
      <a
        className={`header-nav-menu-icon ${isOpen ? 'open' : ''}`}
        href="#"
        onClick={toggleMenu}
      >
        {isOpen ? <IoMdClose /> : <IoIosMenu />}
      </a>

      <ul className={`header-nav-menu-list ${isOpen ? 'open' : ''}`}>
        <li>
          <a className="header-nav-menu-list-links" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="header-nav-menu-list-links" href="#">
            About
          </a>
        </li>
        <li>
          <a className="header-nav-menu-list-links" href="#">
            Artists
          </a>
        </li>
        <li>
          <a className="header-nav-menu-list-links" href="#">
            Careers
          </a>
        </li>
        <li>
          <a className="header-nav-menu-list-links" href="#">
            News
          </a>
        </li>
        <li>
          <a className="header-nav-menu-list-links" href="#">
            Company
          </a>
        </li>
        <li>
          <a className="header-nav-menu-list-links getStarted" href="#">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
};
