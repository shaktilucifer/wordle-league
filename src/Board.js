import logo from './logo.svg';
import './App.css';
import WordRow from './WordRow';
import { useEffect, useState } from 'react';
import './Board.css';

export default function Board({clickedLetter}) {

  const [word, setWord] = useState('tests');
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    // set word here
  })

  return (
    <div className="Board">
     { [1,2,3,4,5].map((index) => {
        return <WordRow key={'row_'+index} />
      })}
    </div>
  );
}