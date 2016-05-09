import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
				<Sidebar />
				<div className="ui main-content">
					<SearchBar />
					<Cards />
				</div>
				<Footer />
			</div>
		);
	}
}
