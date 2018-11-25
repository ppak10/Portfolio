import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navbar = () => (
  <div className = "navbar">
    <NavLink className = "navbar-brand" to = "/">
      <img className = "navbar-brand-icon" src = "public/images/morty.jpeg"/>
      <span className = "button-text">Home</span>
    </NavLink>
    <ul className = "navbar-list">
      <li className = "navbar-dropdown">
        <button className = "navbar-dropdown-button"
          to = "/experience">
          <FontAwesomeIcon className = "button-icon" icon = "briefcase" />
          <span className = "button-text">Experience</span>
        </button>
        <div className = "navbar-dropdown-content">
          <NavLink className = "navbar-link" to = "/work">
            <FontAwesomeIcon className = "button-icon" icon = "code" />
            <span className = "button-text">Work</span>
          </NavLink>
          <NavLink className = "navbar-link" to = "/research">
            <FontAwesomeIcon className = "button-icon" icon = "flask" />
            <span className = "button-text">Research</span>
          </NavLink>
          <NavLink className = "navbar-link" to = "/education">
            <FontAwesomeIcon
              className = "button-icon"
              icon = "graduation-cap" />
            <span className = "button-text">Education</span>
          </NavLink>
        </div>
      </li>
      <li className = "navbar-list-item">
        <a className = "navbar-link"
          target = "_blank"
          rel = "noopener noreferrer"
          href = "https://www.github.com/ppak10">
          <FontAwesomeIcon icon = {['fab', 'github']} />
        </a>
      </li>
      <li className = "navbar-list-item">
        <a className = "navbar-link"
          target = "_blank"
          rel = "noopener noreferrer"
          href = "http://www.linkedin.com/in/ppak10">
          <FontAwesomeIcon icon = {['fab', 'linkedin']} />
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;
