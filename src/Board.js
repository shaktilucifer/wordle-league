import logo from './logo.svg';
import './App.css';
import WordRow from './WordRow';
import { useEffect, useState } from 'react';
import './Board.css';

export default function Board({clickedLetter, currentWord, currentRow}) {

  const [word, setWord] = useState('tests');

  useEffect(() => {
    console.log(currentWord);

    // set word here
  })

  return (
    <div className="Board">
     { [0, 1, 2, 3, 4].map((index) => {
        return <WordRow key={'row_'+index} letterArray={currentRow === index ? currentWord.split(''): []} />
      })}
    </div>
  );
}