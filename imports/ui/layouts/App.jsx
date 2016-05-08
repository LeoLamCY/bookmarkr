import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar.jsx';


export default class App extends Component {
	render() {
		return (
			<div>
				<aside className="ui left fixed vertical inverted menu">
                    <header className="item">
                        <Link to="\"><img className="ui small image centered" src="img/logo.png" /></Link>
                    </header>
                    <div className="item">
                        <h4 className="ui inverted header">Tags</h4>
                        <div className="menu">
                            <a href="#" className="item">Tag1</a>
                        </div>
                    </div>
                </aside>
				<div className="ui main-content">
					<SearchBar />
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
