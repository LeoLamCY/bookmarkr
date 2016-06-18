import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: "",
        }
    }

    onTagClick(tag) {
        $(".search.dropdown").dropdown('set exactly', tag);
    }

    componentDidMount() {
        $(".search.dropdown").dropdown({
            showOnFocus: true,
            fullTextSearch: true,
            onChange: (value, text, $selectedItem) => {
                // console.log("-------------");
                // console.log("value:" + value);
                // console.log("text:" + text);
                // console.log("selectedItem:" + $selectedItem);
                // console.log("-------------");
                this.setState({tags: value}, () =>
                    this.props.onSearchBarChange(this.state.tags)
                );
                $(".search.dropdown").dropdown("hide");
            }
        }).bind(this);
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
};
