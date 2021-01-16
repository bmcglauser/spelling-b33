import React from 'react';
import './App.scss';
import DeleteButton from './components/Buttons/DeleteButton';
import Honeycomb from './components/Honeycomb';
import LetterDisplay from './components/LetterDisplay';
import ScrambleButton from './components/Buttons/ScrambleButton';
import SubmitButton from './components/Buttons/SubmitButton';
import StateContext, { IState } from './utils/StateContext';
import MessageDisplay from './components/MessageDisplay';
import ScoreDisplay from './components/ScoreDisplay';

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      chosenLetters: [],
      allLetters: {centerLetter: 'A', perimLetters: ['B','C','D','E','F','G']},
      scoreInfo: {totalPoints: 0, foundWords: []},
      messageInfo: {
        displayMessage: false,
        type: 'tooshort',
        recentPoints: 0
      }
    }
  }

  setChosenLetters (newLetters: string[]) {
    this.setState({
      ...this.state,
      chosenLetters: newLetters
    })
  }

  render() { return(
    <StateContext.Provider
      value={{ state: this.state, setState: this.setState.bind(this)}}
    >
      <div className="app">
        <ScoreDisplay />
        <MessageDisplay />
        <LetterDisplay />
        <Honeycomb />
        <div className="buttons-wrapper">
          <DeleteButton />
          <ScrambleButton />
          <SubmitButton />
        </div>
      </div>
    </StateContext.Provider>
  );
}
}

export default App;
