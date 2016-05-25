import React, { Component, PropTypes } from 'react';

import TagLabels from '../components/TagLabels.jsx';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onRemoveClick(event) {
        event.preventDefault();
        Meteor.call('bookmarks.remove', this.props.bookmark._id, this.props.bookmark.tagsArray);
    }

    componentDidMount() {
        $('.content a').popup({
            delay: {
                show: 800
            }
        });
    }

    render() {
        return(
            <div className="ui card hvr-underline-reveal">
                <div className="content">
                    <a href={ this.props.bookmark.url }
                        data-content={ this.props.bookmark.title }
                        data-variation="very wide inverted"
                        ><span className="click-zone"></span></a>
                    <div className="header">
                        { this.props.bookmark.title }
                    </div>
                    <div className="description">
                        <p>{this.props.bookmark.url}</p>
                    </div>
                    <TagLabels tagsArray={this.props.bookmark.tagsArray} onTagClick={this.props.onTagClick}/>
                </div>
                <div className="extra content">
                    <span className="left floated">
                        <i className="icon bookmark"></i>
                        {moment(this.props.bookmark.created).format("MM/DD/YYYY")}
                    </span>
                    <span className="right floated">
                        <a href="#" id="remove-button" onClick={ this.onRemoveClick }>
                            <i className="icon remove"></i>
                            Remove
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    bookmark: PropTypes.object.isRequired,
    onTagClick: PropTypes.func.isRequired,
};
