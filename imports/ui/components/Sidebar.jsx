import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { Tags } from '/imports/api/tags.js';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="ui left fixed vertical inverted menu">
                <header className="item">
                    <a href="/"><img className="ui small image centered" src="/img/logo.png" /></a>
                </header>
                <div className="item">
                    <h4 className="ui inverted header">Tags</h4>
                    <div className="menu">
                    {
                        this.props.tags.map( (tag) =>
                            <a className="ui teal tag label name" onClick={this.props.onTagClick.bind(this, tag.name)} key={tag._id}>{tag.name}<span className="detail">{tag.count}</span></a>
                        )
                    }
                    </div>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired,
};
