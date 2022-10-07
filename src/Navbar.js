import './Navbar.scss';
import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from './Theme';
import { Link } from 'react-router-dom';
import Logo1 from './assets/logo/logo1.png';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav ">
      <Link to="/" className="nav_logo">
        <img src={Logo1} alt="" width={25} height={25} />
      </Link>

      <div className="nav_small_button">
        <div
          role="button"
          className="theme-button"
          onClick={toggleTheme}
          onKeyPress={toggleTheme}
          tabIndex="0">
          <FaSun className="sun" />
          <FaMoon className="moon" />
        </div>
        <div className="nav_small">
          {toggleMenu === false && (
            <div className="small">
              <FaBars
                className="nav_sro"
                size={15}
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            </div>
          )}
          {toggleMenu === true && (
            <div className="nav_src">
              <FaTimes
                size={17}
                color="white"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul className="nav_srcList">
                <li className="nav_srcLink">
                  <Link
                    className="listA "
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                    to="/">
                    Home
                  </Link>
                </li>
                <li className="nav_srcLink">
                  <Link
                    className="listA "
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                    to="/works">
                    Works
                  </Link>
                </li>
                <li className="nav_srcLink">
                  <Link
                    className="listA "
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                    to="/about">
                    About
                  </Link>
                </li>
                <li className="nav_srcLink">
                  <Link
                    className="listA "
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                    to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
