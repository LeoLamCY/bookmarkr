import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currBookmarkNumber: 4
        };
    }

    renderCards() {
        let filteredBookmarks = this.props.bookmarks.slice(0, this.state.currBookmarkNumber);

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

    componentDidUpdate() {
        $('.content a').popup({
            delay: {
                show: 800
            }
        });
    }

    componentDidMount() {
        $(window).scroll( () => {
            if ($(window).scrollTop() == $(document).height() - $(window).height()){
                console.log("test");
                this.setState({ currBookmarkNumber: this.state.currBookmarkNumber += 2});
            }
        });
    }

    render() {
        var masonryOptions = {
            transitionDuration: "0.4s"
        };
        return(
                <Masonry
                className={'ui cards'}
                elementType={'div'}
                options={masonryOptions}
                disableImagesLoaded={false}>
                    {this.renderCards()}
                </Masonry>
        );
    }
}

Cards.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    selectedTags: PropTypes.array,
    onTagClick: PropTypes.func.isRequired,
};
