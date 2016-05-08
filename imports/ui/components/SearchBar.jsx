import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return(
            <div>
                <select className="ui search dropdown" multiple="">
                    <option value="">Search tags</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                </select>
            </div>
        );
    }
}