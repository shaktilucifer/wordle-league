import logo from './logo.svg';
import './App.css';
import WordRow from './WordRow';
import { useEffect } from 'react';

function Board() {

  useEffect(() => {
    // set word here
  })

  return (
    <div className="Board">
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
    </div>
  );
}

export default App;
