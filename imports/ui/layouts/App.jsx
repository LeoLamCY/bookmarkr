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
		return (
			<div className="wrapper">
				<Sidebar />
				<div className="ui main-content">
					<SearchBar />
					<Cards bookmarks={ this.props.bookmarks }/>
					<div className="ui modal">
				  <i className="close icon"></i>
				  <div className="header">
				    Modal Title
				  </div>
				  <div className="image content">
				    <div className="image">
				      An image can appear on left or an icon
				    </div>
				    <div className="description">
				      A description can appear on the right
				    </div>
				  </div>
				  <div className="actions">
				    <div className="ui button">Cancel</div>
				    <div className="ui button">OK</div>
				  </div>
				</div>
				</div>
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
