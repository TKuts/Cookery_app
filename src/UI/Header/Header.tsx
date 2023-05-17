import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import "./Header.scss";

const Header = () => {
  
  return (
		<header className="header">
			
			<Link to={"/"} className="header__logo-title link">
				Foodieland<span className="header__logo-point">.</span>
			</Link>
			
			<nav className="header__menu">
				<ul className="header__menu-list">
					<Link to={"/"} className="link">
						<li className="header__menu-point ">Home</li>
					</Link>
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
