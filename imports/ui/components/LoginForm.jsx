import React, { Component, PropTypes} from 'react';
import {ComboBox} from 'meteor/universe:accounts-ui-modded';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		    <div id="login-form">
				<ComboBox />
			</div>
		);
	}
}