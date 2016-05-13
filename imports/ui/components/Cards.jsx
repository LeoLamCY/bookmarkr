import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="ui cards">
            { this.props.bookmarks.map( (bookmark) =>
                    <Card url={ bookmark.url } tags={ bookmark.tags } key={ bookmark._id}/>
                )
            }
            </div>
        );
    }
}
