import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { observer } from "mobx-react-lite";

const Footer: React.FC = observer(() => {
	return (
		<footer className="footer">
			<section className="footer-up">
				<ul className="footer-up__logo">
					<li className="footer-up__logo-title">Foodieland<span className="footer-up__logo-point">.</span></li>
				</ul>
				<nav className="footer-up__menu">
					<ul className="footer-up__menu-list">
						<li className="footer-up__menu-point">Home</li>
						<li className="footer-up__menu-point">Recipes</li>
						<li className="footer-up__menu-point">Blog</li>
						<li className="footer-up__menu-point">About</li>
					</ul>
				</nav>
			</section>
			<section className="footer-down">
				<h4 className="footer-down__title">© 2023 Project by <span className="footer-down__name">Anton Kuts</span></h4>
				<ul className="footer-down__social">
					<li className="footer-down__social-icon">
						<a href="#" target={"_blank"} className="footer-down__social-img">
							<i className="bi bi-facebook"></i>
						</a>
					</li>
					<li className="footer-down__social-icon">
						<a href="#" target={"_blank"} className="footer-down__social-img">
							<i className="bi bi-twitter"></i>
						</a>
					</li>
					<li className="footer-down__social-icon">
						<a href="#" target={"_blank"} className="footer-down__social-img">
							<i className="bi bi-instagram"></i>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	)
})

export default Footer;
