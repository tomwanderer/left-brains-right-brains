import React, { Component } from 'react';

class GetResult extends Component {
  styles = {
    fontWeight: 'bold',
    fontSize: 25
  };
  render() {
    return (
      <div className="btn-result">
        <button
          onClick={() => this.props.onResult()}
          style={this.styles}
          className="btn btn-primary btn-lg"
        >
          Get your result!
        </button>
      </div>
    );
  }
}

export default GetResult;
