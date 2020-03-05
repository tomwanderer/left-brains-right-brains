import React, { Component } from 'react';
import Question from './Question';

class Questions extends Component {
  render() {
    return (
      <div>
        {this.props.questions.map(question => (
          <Question
            key={question.id}
            question={question}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Questions;
