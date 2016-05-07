import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	render() {
		return (
			<div>
				<aside className="ui left fixed vertical inverted menu">
					<header className="item">
						<Link to="\"><img className="ui small image" src="img/logo.png" /></Link>
					</header>
					<div className="item">
						<h4 className="ui inverted header">Tags</h4>
						<div className="menu">
							<a href="#" className="item">Tag1</a>
						</div>
					</div>
				</aside>
				<div className="ui main-content">
					<select className="ui search dropdown" multiple="">
						<option value="">Search tags</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
					</select>
					<div className="ui cards">
						<div className="ui card">
							<div className="content">
								<a className="header">Kristy</a>
								<div className="meta">
									<span className="date">Joined in 2013</span>
								</div>
								<div className="description">
									Kristy is an art director living in New York.
								</div>
							</div>
							<div className="extra content">
								<a>
									<i className="user icon"></i>
									22 Friends
								</a>
							</div>
						</div>
						<div className="ui card">
							<div className="content">
								<a className="header">Kristy</a>
								<div className="meta">
									<span className="date">Joined in 2013</span>
								</div>
								<div className="description">
									Kristy is an art director living in New York.
								</div>
							</div>
							<div className="extra content">
								<a>
									<i className="user icon"></i>
									22 Friends
								</a>
							</div>
						</div>
						<div className="ui card">
							<div className="content">
								<a className="header">Kristy</a>
								<div className="meta">
									<span className="date">Joined in 2013</span>
								</div>
								<div className="description">
									Kristy is an art director living in New York.
								</div>
							</div>
							<div className="extra content">
								<a>
									<i className="user icon"></i>
									22 Friends
								</a>
							</div>
						</div>
					</div>
				</div>
				<footer>&copy; Copyright 2016 Leo Lam</footer>
			</div>
		);
	}
}
