import React, { Component, PropTypes } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="ui cards">
            { this.props.bookmarks.map( (bookmark) =>
                    <Card bookmark={ bookmark } key={ bookmark._id}/>
                )
            }
            </div>
        );
    }
}

Cards.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    selectedTags: PropTypes.array,
};
