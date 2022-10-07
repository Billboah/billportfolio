import React from 'react';
import { FaEnvelope, FaGithub, FaHome, FaLaptop, FaLinkedin, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import Logo1 from './assets/logo/logo1.png';
import Logo2 from './assets/logo/logo2.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <img src={Logo1} alt="logo" width={60} height={80} />
        <img src={Logo2} alt="sublogo" width={100} height={20} />
      </Link>
      <ul className="nav_list">
        <li className="nav_link">
          <NavLink className="listA" activeclassname="active" exact="true" to="/">
            <FaHome size={30} />
            Home
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink className="listA" activeclassname="active" exact="true" to="/works">
            <FaLaptop size={30} />
            Works
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink className="listA" activeclassname="active" exact="true" to="/about">
            <FaUser size={30} />
            About
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink className="listA" activeclassname="active" exact="true" to="/contact">
            <FaEnvelope size={30} />
            Contact
          </NavLink>
        </li>
        <div className=" home-buttons">
          <a href="https://www.github.com/billboah" target="_blank" rel="noreferrer">
            <FaGithub className="icon" size={20} />
          </a>
          <a href="https://www.linkedin.com/in/billboah" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" size={20} />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
