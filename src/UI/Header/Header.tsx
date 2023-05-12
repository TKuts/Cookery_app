import React, { useState, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  
  return (
		<header className="header">
			<ul className="header__logo">
				<li className="header__logo-title">Foodieland<span className="header__logo-point">.</span></li>
			</ul>
			<nav className="header__menu">
				<ul className="header__menu-list">
					<li className="header__menu-point">Home</li>
					<li className="header__menu-point">Recipes</li>
					<li className="header__menu-point">Blog</li>
					<li className="header__menu-point">About</li>
				</ul>
			</nav>
			<ul className="header__social">
				<li className="header__social-icon">
					<a href="#" target={"_blank"}>
						<img className="header__social-img" src="src/UI/Header/img/facebook.svg" alt="facebook" />
					</a>
				</li>
				<li className="header__social-icon">
					<a href="#" target={"_blank"}>
						<img className="header__social-img" src="src/UI/Header/img/twitter.svg" alt="twitter" />
					</a>
				</li>
				<li className="header__social-icon">
					<a href="#" target={"_blank"}>
						<img className="header__social-img" src="src/UI/Header/img/instagram.svg" alt="instagram" />
					</a>
				</li>
			</ul>
		</header>

  )
	
}

export default Header;
