import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div className="ui cards">
                <Card name=""/>
            </div>
        );
    }
}