import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';

import SearchBar from '../components/SearchBar.jsx';
import SidebarContainer from '../containers/SidebarContainer.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

import { Bookmarks } from '/imports/api/bookmarks.js';
import { Tags } from '/imports/api/tags.js';

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
		let title = ReactDOM.findDOMNode(this.refs.title).value.trim();
		let url = ReactDOM.findDOMNode(this.refs.url).value.trim();
		let tags = ReactDOM.findDOMNode(this.refs.tags).value.trim();
		let date = moment().toDate();

		tags = tags.split(',');
		if(!url.startsWith("http://") && !url.startsWith("https://")) {
			url = "http://" + url;
		}

		tags.map( (tag) => {
			//need to implement methods first
			//Tags.upsert({name: tags}, {$inc: { count: 1}});
			let cursor = Tags.find({name: tag});
			if(cursor.fetch().length == 0) {
				Tags.insert({
					name: tag,
					count: 0,
				});
			}
			else {
				Tags.update({name: tag}, {$inc: {count: 1}});
			}
		});

		ReactDOM.findDOMNode(this.refs.title).value = '';
		ReactDOM.findDOMNode(this.refs.url).value = '';
		ReactDOM.findDOMNode(this.refs.tags).value = '';
		Bookmarks.insert({
			title,
			url,
			tags,
			created: date,
		}, (err, id) => {
			// id == null ? this.setState({'submitSuccess': false}) : this.setState({'submitSuccess': true});
		});
	}

	render() {
		// var formSuccessClass = classNames({
		// 	'ui': true,
		// 	'form': true,
		// 	'success': this.state.submitSuccess,
		// });
		return (
			<div className="wrapper">
				<SidebarContainer />
				<div className="ui main-content">
					<SearchBar />
					<Cards bookmarks={ this.props.bookmarks }/>
					<div className="ui modal">
					  <i className="close icon"></i>
					  <div className="header">
						New Bookmark
					  </div>
					  <div className="content">
						<form className="ui form" onSubmit={ this.onAddBookmarkFormSubmit }>
							<div className="required field">
								<input type="text" name="title" ref="title" placeholder="Title" />
							</div>
						  <div className="required field">
							<input type="text" name="url" ref="url" placeholder="URL" />
						  </div>
						  <div className="required field">
							<input type="text" name="tags" ref="tags" placeholder="Tags" />
						  </div>
						  <div className="ui success message">
							<p>Bookmark added.</p>
						  </div>
						  <div className="actions">
						  	<button className="ui approve button" type="submit">Add</button>
						  </div>
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
