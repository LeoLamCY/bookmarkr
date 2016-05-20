import React, { Component } from 'react';
import { Link } from 'react-router'

import { Tags } from '/imports/api/tags.js';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: {}
        }
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
                        <a href="#" className="item">Tag1</a>
                    </div>
                </div>
            </div>
        );
    }
}
