import React, { Component, PropTypes } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }

    renderCards() {
        let filteredBookmarks = this.props.bookmarks;

        if(this.props.selectedTags && this.props.selectedTags[0] !== "") {
            filteredBookmarks = filteredBookmarks.filter( bookmark => {
                return _.difference(this.props.selectedTags, bookmark.tagsArray).length === 0;
            });
        }

        return filteredBookmarks.map( (bookmark) => {
            return(
                <Card bookmark={ bookmark } key={ bookmark._id}/>
            )
        });
    }

    render() {
        return(
            <div className="ui cards">
                {this.renderCards()}
            </div>
        );
    }
}

Cards.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    selectedTags: PropTypes.array,
};
