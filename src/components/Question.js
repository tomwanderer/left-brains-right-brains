import React, { Component } from 'react';

class Question extends Component {
  getBadgetClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.question.value === 1 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.question;
    return value === 0 ? 0 : value;
  }
  render() {
    const { question, onIncrement, onDecrement } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {question.id}.<span> </span>
            {question.question}
          </div>
          <div className="col-2">
            <span className={this.getBadgetClasses()}>
              {this.formatCount()}
            </span>
            <button
              style={{ fontWeight: 'bold' }}
              onClick={() => onIncrement(question)}
              className="btn btn-primary btn-sm m-2"
            >
              +1
            </button>
            <button
              style={{ fontWeight: 'bold' }}
              onClick={() => onDecrement(question)}
              className="btn btn-danger btn-sm m-2"
            >
              -1
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
