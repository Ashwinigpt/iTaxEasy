import React from "react";

function Header() {
  return (
    <header>
      <div className="container flex header1">
        <a href="#"><img className="img" src="https://itaxeasy.com/static/media/logo2.c00f4d085e2f20279eec.png" alt="header-logo" /></a>
        <div className="flex">
          <nav className="header-navs">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">CASES</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
          </nav>
          <a className="contact-link" href="#">CONTACT NOW</a>
        </div>
      </div>
    </header>
  );
}

export default Header;