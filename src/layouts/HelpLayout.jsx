import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HelpLayout() {
	return (
		<div className="help-layout">
			<h2>Website Help</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
				nostrum?
			</p>

			<nav>
				<NavLink to="faq">View The FAQ</NavLink>
				<NavLink to="contact">Contact Us</NavLink>
			</nav>

			<Outlet />
		</div>
	);
}

export default HelpLayout;
