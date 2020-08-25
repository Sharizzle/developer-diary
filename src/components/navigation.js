import React from 'react';
import { Link } from 'gatsby';
import ThemeChanger from '../components/themeChanger';

export default (props) => (
	<nav className="navigation">
		<a href="https://sharif.thekanaan.com">Website</a>
		<a href="hhttps://github.com/Sharizzle">Github</a>
		<ThemeChanger />
	</nav>
);
