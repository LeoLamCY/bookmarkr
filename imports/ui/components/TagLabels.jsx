import React, { Component, PropTypes } from 'react';

export default class TagLabels extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='ui circular labels card-labels'>
                {
                    this.props.tagsArray.map( (name) => 
                        <a className='ui label'>{name}</a>
                    )
                }
            </div>
        );
    }
}

TagLabels.propTypes = {
    tagsArray: PropTypes.array.isRequired,
}