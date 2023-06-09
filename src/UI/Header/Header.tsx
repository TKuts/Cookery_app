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

					<Link to={"/galary/all"} className="link">
						<li className="header__menu-point">Recipes</li>
					</Link>

					<li className="header__menu-point">Blog</li>
					<li className="header__menu-point">About</li>
				</ul>
			</nav>

			<ul className="header__social">
				<li className="header__social-icon">
					<a href="#" target={"_blank"} className="header__social-img">
						<i className="bi bi-facebook"></i>
					</a>
				</li>
				<li className="header__social-icon">
					<a href="#" target={"_blank"} className="header__social-img">
						<i className="bi bi-twitter"></i>
					</a>
				</li>
				<li className="header__social-icon ">
					<a href="#" target={"_blank"} className="header__social-img link">
						<i className="bi bi-instagram"></i>
					</a>
				</li>
			</ul>
		</header>

	)

}

export default Header;
