import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';

import SearchBar from '../components/SearchBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';

export default class App extends React.Component {
	constructor(props) {
        super(props);
    	this.onAddBookmarkFormSubmit = this.onAddBookmarkFormSubmit.bind(this);

    	this.state = {
    		submitSuccess: false,
    	}
    }

    onAddBookmarkFormSubmit(event) {
    	event.preventDefault();
    	let url = ReactDOM.findDOMNode(this.refs.url).value.trim();
    	let tags = ReactDOM.findDOMNode(this.refs.tags).value.trim();
    	tags = tags.split(',');
    	let date = moment().toDate();
    	ReactDOM.findDOMNode(this.refs.url).value = '';
    	ReactDOM.findDOMNode(this.refs.tags).value = '';
    	Bookmarks.insert({
			url,
			tags,
			created: date,
    	}, (err, id) => {
    		id == null ? this.setState({'submitSuccess': false}) : this.setState({'submitSuccess': true});
    	});
    }

	render() {
		var formSuccessClass = classNames({
			'ui': true,
			'form': true,
			'success': this.state.submitSuccess,
		});
		return (
			<div className="wrapper">
				<Sidebar />
				<div className="ui main-content">
					<SearchBar />
					<Cards bookmarks={ this.props.bookmarks }/>
					<div className="ui modal">
					  <i className="close icon"></i>
					  <div className="header">
					    New Bookmark
					  </div>
					  <div className="content">
					    <form className={ formSuccessClass } onSubmit={ this.onAddBookmarkFormSubmit }>
						  <div className="required field">
						    <input type="text" name="url" ref="url" placeholder="URL" />
						  </div>
						  <div className="required field">
						    <input type="text" name="tags" ref="tags" placeholder="Tags" />
						  </div>
						  <div className="ui success message">
						    <p>Bookmark added.</p>
						  </div>
						  <button className="ui button" type="submit">Add</button>
						</form>
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
