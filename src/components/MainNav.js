import React from 'react';
import './MainNav.css';

const MainNav = () => {
  return (
    <div>
        <nav className="zone green">
            <ul className="main-nav">
                <li><a href="google.com">About</a></li>
                <li><a href="google.com">Products</a></li>
                <li><a href="google.com">Our Team</a></li>
                
                <li className="push"><a href="google.com">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default MainNav;