import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';

export default class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		const { bookmarks } = this.props;
		return (
			<div>
				<Sidebar />
				<div className="ui main-content">
					<SearchBar />
					<Cards bookmarks={ bookmarks }/>
				</div>
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
