import React, { Component } from 'react';

class componentName extends Component {
  render() {
    return (
      <div>
        <h1 style={{display:'none'}}>Props : {this.props.match.params.id}</h1>
        <h1 className="display-4">About Contact Manager</h1>
        <p className="lead">Simple app to manage contact</p>
        <p className="text-secondary">Version 1.0.0</p>
      </div>
    );
  }
}
export default componentName
