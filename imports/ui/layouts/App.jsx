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
		};

		this.onSearchBarChange = this.onSearchBarChange.bind(this);
	}

	onSearchBarChange(tags) {
		this.setState({selectedTags: tags.split(',')});
	}

	processSelectedTags(selectedTags) {
		if(selectedTags)
			return selectedTags.split('+');
	}

	render() {
		const selectedTags = this.processSelectedTags(this.props.selectedTags);
		// var formSuccessClass = classNames({
		// 	'ui': true,
		// 	'form': true,
		// 	'success': this.state.submitSuccess,
		// });
		return (
			<div className="wrapper">
				<SidebarContainer />
				<div className="ui main-content">
					<SearchBar onSearchBarChange={this.onSearchBarChange} allTags={this.props.tags}/>
					<Cards bookmarks={ this.props.bookmarks } selectedTags={this.state.selectedTags}/>
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
