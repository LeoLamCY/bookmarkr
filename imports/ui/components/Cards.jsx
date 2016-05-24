import React, { Component, PropTypes } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.renderCards();
    }

    renderCards() {
        let filteredBookmarks = this.props.bookmarks;

        if(this.props.selectedTags && this.props.selectedTags.length != 0) {
            filteredBookmarks = filteredBookmarks.filter( bookmark => 
                bookmark.tagsArray.some( tag => 
                    this.props.selectedTags.includes(tag)
                )
            )
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
