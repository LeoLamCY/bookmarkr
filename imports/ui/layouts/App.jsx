import React, { Component, PropTypes } from 'react';
//import { Link } from 'react-router';
//import classNames from 'classnames';

import SidebarContainer from '../containers/SidebarContainer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import AddBookmarkForm from '../components/AddBookmarkForm.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

//import { Bookmarks } from '/imports/api/bookmarks.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTags: [],
			clickedTag: "",
		};

		this.onSearchBarChange = this.onSearchBarChange.bind(this);
		this.onTagClick = this.onTagClick.bind(this);
	}

	onSearchBarChange(tags) {
		this.setState({selectedTags: tags.split(',')});
	}

	onTagClick(tag) {
		this.setState({clickedTag: tag}, function() {
			this.state.clickedTag = "";
		});
	}

	render() {
		// var formSuccessClass = classNames({
		// 	'ui': true
		// 	'form': true,
		// 	'success': this.state.submitSuccess,
		// });
		return (
			<div className="wrapper">
				<SidebarContainer onTagClick={this.onTagClick}/>
				<div className="ui main-content">
					<SearchBar onSearchBarChange={this.onSearchBarChange} allTags={this.props.tags} clickedTag={this.state.clickedTag}/>
					<Cards bookmarks={ this.props.bookmarks } selectedTags={this.state.selectedTags} onTagClick={this.onTagClick}/>
					<AddBookmarkForm />
				</div>
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  selectedTags: PropTypes.string,
};
