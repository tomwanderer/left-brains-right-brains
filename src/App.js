import React, { Component } from 'react';
import Questions from './components/Questions';
import { queries } from '@testing-library/react';
import GetResult from './components/GetResult';
import AppTitle from './components/AppTitle';
import ResetButton from './components/ResetButton';
import Instruct from './components/Instruct';
import OptionModal from './components/OptionModal';
import TomWanderer from './components/TomWanderer';

class App extends Component {
  state = {
    appTitle: 'Open Hemispheric Brain Dominance Scale 1.0',
    authorTest: 'By Eric Jorgenson',
    tomWanderer: 'Made with ❤️ by TW',
    selectedModal: undefined,
    totalPoints: { value: 2 },
    instruct: `For each question 1-20, please rate the item on a scale from 1 to 5 on how much you
    agree with the statement. For example, if you agree completely with question one put down a five by pressing the PLUS button to five, if you entirely disagree with it put down 1 by pressing the MINUS button to 1, if you are neutral or unsure put down a 3.`,
    querries: [
      { id: 1, question: 'I do not need others praise', value: 1 },
      {
        id: 2,
        question: `I would prefer a class in mathematics to a class in pottery`,
        value: 1
      },
      { id: 3, question: `I never show up late.`, value: 1 },
      {
        id: 4,
        question: `I don't bother to read instructions before I start putting something together.`,
        value: 1
      },
      { id: 5, question: `I could not live in a mess.`, value: 1 },
      { id: 6, question: `I am totally random.`, value: 1 },
      { id: 7, question: `I like working with words.`, value: 1 },
      { id: 8, question: `I behave in a businesslike manner.`, value: 1 },
      { id: 9, question: `I come up with something new.`, value: 1 },
      { id: 10, question: `I am not easily disturbed by events.`, value: 1 },
      { id: 11, question: `I rarely cry during sad movies.`, value: 1 },
      { id: 12, question: `I plan my life logically.`, value: 1 },
      { id: 13, question: `I need a creative outlet.`, value: 1 },
      {
        id: 14,
        question: `I make decisions based on facts, not feelings.`,
        value: 1
      },
      { id: 15, question: `I make a mess of things.`, value: 1 },
      { id: 16, question: `I get stressed out easily.`, value: 1 },
      { id: 17, question: `I am romantic.`, value: 1 },
      { id: 18, question: `I prize logic above all else.`, value: 1 },
      {
        id: 19,
        question: `I often forget to put things back in their proper place.`,
        value: 1
      },
      { id: 20, question: `I am calm even in tense situations.`, value: 1 }
    ]
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('querries');
      const querries = JSON.parse(json);
      if (querries) {
        this.setState({ querries });
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.querries !== this.state.querries) {
      const json = JSON.stringify(this.state.querries);
      localStorage.setItem('querries', json);
    }
  }

  handleReset = () => {
    const querries = this.state.querries.map(c => {
      c.value = 1;
      return c;
    });
    this.setState({ querries });
  };

  handleGetResult = () => {
    const sumA =
      this.state.querries[0].value +
      this.state.querries[1].value +
      this.state.querries[2].value +
      this.state.querries[4].value +
      this.state.querries[7].value +
      this.state.querries[9].value +
      this.state.querries[10].value +
      this.state.querries[11].value +
      this.state.querries[13].value +
      this.state.querries[17].value +
      this.state.querries[19].value;

    const sumB =
      this.state.querries[3].value +
      this.state.querries[5].value +
      this.state.querries[6].value +
      this.state.querries[8].value +
      this.state.querries[12].value +
      this.state.querries[14].value +
      this.state.querries[15].value +
      this.state.querries[16].value +
      this.state.querries[18].value;

    const finalResult = 66 - sumA + sumB;
    console.log(finalResult);
    if (finalResult >= 20 && finalResult <= 55) {
      // alert(finalResult && `Hey there! You're left-brained!`);
      this.setState({
        selectedModal: finalResult + `. Hey there! You're left-brained!`
      });
    } else if (finalResult > 56 && finalResult <= 64) {
      // alert(
      //   finalResult &&
      //     `Hey there! We're sorry but we're not so sure about your case. But be happy because you're unique!`
      // );
      this.setState({
        selectedModal:
          finalResult +
          `. Unfortunately, we're not so sure that you're left-brained or right-brained. But be happy because you're unique!`
      });
    } else {
      // alert(finalResult && `Hey there! You're right-brained!`);
      this.setState({
        selectedModal: finalResult + `. Hey there! You're right-brained!`
      });
    }
  };

  handleIncrement = question => {
    const querries = [...this.state.querries];
    const index = querries.indexOf(question);
    querries[index] = { ...question };
    if (querries[index].value < 5) {
      querries[index].value++;
    }
    this.setState({ querries });
  };

  handleDecrement = question => {
    const querries = [...this.state.querries];
    const index = querries.indexOf(question);
    querries[index] = { ...question };
    if (querries[index].value > 1) {
      querries[index].value--;
    }
    // const testSum2 = querries[0].value;
    // console.log(testSum2);
    this.setState({ querries });
  };

  handleRemoveModal = () => {
    this.setState({ selectedModal: undefined });
  };

  render() {
    return (
      <div className="container">
        <OptionModal
          selectedModal={this.state.selectedModal}
          onRemoveModal={this.handleRemoveModal}
        />
        <AppTitle title={this.state.appTitle} author={this.state.authorTest} />
        <Instruct instruct={this.state.instruct} />
        <ResetButton onReset={this.handleReset} />
        <Questions
          questions={this.state.querries}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <GetResult onResult={this.handleGetResult} />
        <TomWanderer tomWanderer={this.state.tomWanderer} />
      </div>
    );
  }
}

export default App;
