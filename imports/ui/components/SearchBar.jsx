import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: "",
        }
    }

    componentDidMount() {
        $(".search.dropdown").dropdown({
            onChange: (value, text, $selectedItem) => {
                this.setState({tags: value});
                this.props.onSearchBarChange(this.state.tags);
            },
        }).bind(this);
    }

    renderTags() {
        return this.props.allTags.map( (tag) => {
            return(
                <div className="item">{tag.name}</div>
            )
        });
    }

    render() {
        return(
            <div className="ui search dropdown selection multiple">
                <input name="tag" type="hidden" />
                <i className="search disabled icon"></i>
                <div className="default text">Search Tags</div>
                <div className="menu">
                    {this.renderTags()}
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearchBarChange: PropTypes.func.isRequired,
    allTags: PropTypes.array.isRequired,
};