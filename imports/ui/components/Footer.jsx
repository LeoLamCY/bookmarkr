import React, { Component } from 'react';

export default class Footer extends Component {
    showModal(event) {
        $('.ui.modal').modal('show');
    }
    render() {
        return(
            <footer>
                <button onClick={this.showModal}>Add bookmark</button>
                &copy; Copyright 2016 Leo Lam
            </footer>
        );
    }
}
