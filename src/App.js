import logo from './logo.svg';
import './App.css';
import Board from './Board';
import KeyBoard from './Keyboard';
import { useCallback, useState } from 'react';

function App() {
  const [clickedLetter, setClickedLetter] = useState('');
  const [currentWord, setCurrentWord] = useState('');

  const onClickKey = useCallback((clickedLetter) => {
    setClickedLetter(clickedLetter);
    if(currentWord.length < 5 {
       currentWord = currentWord + clickedLetter;
    })
  }, [setClickedLetter]);

  return (
    <div className="App">
        <header><strong>WORDLE LEAGUE</strong></header>
        <Board clickedLetter={clickedLetter} />
        <KeyBoard onClickKey={onClickKey} />
    </div>
  );
}

export default App;
