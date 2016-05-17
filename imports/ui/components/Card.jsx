import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        return(
            <div className="ui card">
                <div className="content">
                    <a className="header">
                        { this.props.title }
                    </a>
                    <div className="description">
                        <p>{this.props.url}</p>
                    </div>
                </div>
                <div className="extra content">
                    <span className="left floated">
                        <i className="icon bookmark"></i>
                        {moment(this.props.created).format("MM/DD/YYYY")}
                    </span>
                    <span className="right floated">
                        <a href="#" id="remove-button">
                            <i className="icon remove"></i>
                            Remove
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}
