import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import SidebarContainer from '../containers/SidebarContainer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import AddBookmarkForm from '../components/AddBookmarkForm.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTags: [],
		};

		this.onSearchBarChange = this.onSearchBarChange.bind(this);
		this.onTagClick = this.onTagClick.bind(this);
	}

	onSearchBarChange(tags) {
		this.setState({selectedTags: tags.split(',')});
	}

	onTagClick(tag) {
		this.refs.searchBar.onTagClick(tag);
	}

	componentWillMount() {
		if(!Meteor.userId()) {
			browserHistory.push('/login');
		}
	}

	render() {
		return (
			<div className="wrapper">
				<SidebarContainer onTagClick={this.onTagClick}/>
				<div className="ui main-content">
					<div className="top-bar">
						<SearchBar ref="searchBar" onSearchBarChange={this.onSearchBarChange} allTags={this.props.tags}/>
					</div>
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
