import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        return(
            <div className="ui card">
                <div className="content">
                    <a className="header">{ this.props.url }</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        { this.props.tags }
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
