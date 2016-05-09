import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
    render() {
        return(
            <div className="ui cards">
                <Card name="Kenny"/>
            </div>
        );
    }
}