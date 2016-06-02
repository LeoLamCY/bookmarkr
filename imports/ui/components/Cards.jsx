import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:["test", "test2"]
        }
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
                <Card bookmark={ bookmark } key={ bookmark._id} onTagClick={this.props.onTagClick}/>
            )
        });
    }

    render() {
        return(
            <div className="ui cards">
                <ReactCSSTransitionGroup transitionName="card-transition" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.renderCards()}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Cards.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    selectedTags: PropTypes.array,
    onTagClick: PropTypes.func.isRequired,
};
