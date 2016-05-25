import React, { Component, PropTypes } from 'react';

export default class TagLabels extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='ui teal mini labels card-labels'>
                {
                    this.props.tagsArray.map( (name, i) => 
                        <a className='ui label' onClick={this.props.onTagClick.bind(this, name)} key={i}>{name}</a>
                    )
                }
            </div>
        );
    }
}

TagLabels.propTypes = {
    tagsArray: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired,
}