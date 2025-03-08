import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// import '../../css/top_nav_bar.css';
import '../../css/nav-bar-2.css';

const Header = () => {
  return (
    <div>
      <nav id="navbar">
        <input type="checkbox" id="sidebar-active" />
        <a className="home-link-1" href="/"><img src="/images/icons-logos/Fulldecal.png" alt="" /></a>

        <label for="sidebar-active" class="open-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>

        <label id="overlay" for="sidebar-active"></label>
        
        <div class="links-container" id="top">
          <label for="sidebar-active" class="close-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </label>

          <a 
            className="home-link" 
            href="/">
              <img src="/images/icons-logos/Fulldecal.png" alt="" />
          </a> 
          <a href="/">Home</a> 
          <a href="/menu">Menu</a> 
          <a href="/catering">Catering</a>
          <a href="/delivery">Delivery</a>
          <a href="/about">About</a>
          <a href="/specials">Specials</a>   
        </div>
      </nav>
    </div>
  );
};

export default Header;