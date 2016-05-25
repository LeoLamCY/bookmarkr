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
                // that.props.onSearchBarChange(value);
                this.setState({tags: value});
                this.props.onSearchBarChange(this.state.tags);
            },
        }).bind(this);
    }

    render() {
        return(
            <div className="ui search dropdown selection multiple">
                <input name="tag" type="hidden" />
                <i className="search disabled icon"></i>
                <div className="default text">Search Tags</div>
                <div className="menu">
                    <div className="item">test1</div>
                    <div className="item">tes2</div>
                    <div className="item">test2</div>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearchBarChange: PropTypes.func.isRequired,
};