import React, { Component } from 'react';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui left fixed vertical inverted menu">
          <div className="item">
            <a href="/"><img className="ui small image" src="img/logo.png" /></a>
          </div>
          <div className="item">
              <h4 className="ui inverted header">Tags</h4>
              <div className="menu">
                <a href="#" className="item">Tag1</a>
              </div>
          </div>
        </div>
        <div className="ui main-content container">
            <select className="ui fluid search dropdown" multiple="">

            </select>
        </div>
      </div>
    );
  }
}
