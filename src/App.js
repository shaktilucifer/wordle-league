import logo from './logo.svg';
import './App.css';
import Board from './Board';
import KeyBoard from './Keyboard';
import { useCallback, useState } from 'react';
import { BACKSPACE, ENTER_KEY } from './appConstants.ts';

function App() {
  const [clickedLetter, setClickedLetter] = useState('');
  let [currentWord, setCurrentWord] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const onClickKey = useCallback((clickedLetter) => {
    if(clickedLetter === ENTER_KEY) {
      setCurrentRow(currentRow < 5 ? currentRow + 1 : currentRow);
      //check word against the answer
      return;
    } else if (clickedLetter === BACKSPACE) {
      currentWord = currentWord.substring(0, currentWord.length - 1);
      setCurrentWord(currentWord);
      return;
    }

    setClickedLetter(clickedLetter);
    if(currentWord.length < 5) {
       currentWord = currentWord + clickedLetter;
       setCurrentWord(currentWord);
    }
  }, [setClickedLetter]);

  return (
    <div className="App">
        <header><strong>WORDLE LEAGUE</strong></header>
        <Board clickedLetter={clickedLetter} currentWord={currentWord} currentRow={currentRow} />
        <KeyBoard onClickKey={onClickKey} />
    </div>
  );
}

export default App;
