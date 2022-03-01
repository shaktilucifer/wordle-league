import logo from './logo.svg';
import './App.css';
import Board from './Board';
import KeyBoard from './Keyboard';
import { useCallback, useState } from 'react';

function App() {
  const [clickedLetter, setClickedLetter] = useState('');

  const onClickKey = useCallback((clickedLetter) => {
    setClickedLetter(clickedLetter);
  }, [setClickedLetter]);

  return (
    <div className="App">
        <header><strong>WORDLE LEAGUE</strong></header>
        <Board />
        <KeyBoard onClickKey={onClickKey} />
    </div>
  );
}

export default App;
