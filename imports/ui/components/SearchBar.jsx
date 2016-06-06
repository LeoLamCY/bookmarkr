import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: "",
            lastAddedTag: "",
            lastRemovedTag: "",
        }
    }

    componentDidMount() {
        $(".search.dropdown").dropdown({
            showOnFocus: false,
            fullTextSearch: true,
            onChange: (value, text, $selectedItem) => {
                this.setState({tags: value}, () =>
                    this.props.onSearchBarChange(this.state.tags)
                );
            },
            onRemove: (removedValue, removedText, $removedChoice) => {
                this.setState({lastRemovedTag: removedValue});
            },
        }).bind(this);
    }

    componentWillReceiveProps(newProps) {
        // console.log("clickedTag: " + newProps.clickedTag);
        // console.log("lastAdded: " + this.state.lastAddedTag);
        // console.log("lastRemoved: " + this.state.lastRemovedTag);
        // console.log("------------------ ");
        if(newProps.clickedTag != this.state.lastAddedTag || newProps.clickedTag == this.state.lastRemovedTag) {
            this.setState({lastAddedTag: newProps.clickedTag}, () =>
                $(".search.dropdown").dropdown('set selected', newProps.clickedTag)
            );

        }
    }

    renderTagMenu() {
        return this.props.allTags.map( (tag, i) => {
            return(
                <div className="item" key={i}>{tag.name}</div>
            )
        });
    }

    render() {
        return(
            <div className="ui search dropdown selection multiple">
                <input name="tag" type="hidden"/>
                <i className="search disabled icon"></i>
                <div className="default text">Search Tags</div>
                <div className="menu">
                    {this.renderTagMenu()}
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearchBarChange: PropTypes.func.isRequired,
    allTags: PropTypes.array.isRequired,
    clickedTag: PropTypes.string,
};
