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
                    <Link to="\"><img className="ui small image centered" src="img/logo.png" /></Link>
                </header>
                <div className="item">
                    <h4 className="ui inverted header">Tags</h4>
                    <div className="menu">
                    {
                        this.props.tags.map( (tag) =>
                            <a href="#" className="item" key={tag._id}>{tag.name}</a>
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
};
