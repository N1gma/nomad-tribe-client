import React from 'react';
import { Link } from 'react-router-dom';
import moreIcon from './assets/more.svg';
import './assets/Navigation.css';

const Navigation = () => (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <div className="menu-item">
            <Link className="who-we-are" to="about">Who we are</Link>
            <div className="more-icon">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
);

export default Navigation;
