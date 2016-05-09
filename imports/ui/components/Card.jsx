import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        return(
            <div className="ui card">
                <div className="content">
                    <a className="header">{ this.props.name }</a>
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
        );
    }
}