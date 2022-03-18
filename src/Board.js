import logo from './logo.svg';
import './App.css';
import WordRow from './WordRow';
import { useEffect, useState } from 'react';
import './Board.css';

export default function Board({wordMap, clickedLetter, currentWord, currentRow}) {

  const [word, setWord] = useState('');
  console.log(currentRow);
  useEffect(() => {
    console.log(currentWord);

    // set word here
  })

  return (
    <div className="Board">
     { [...Array(5)].map((index) => {
        return <WordRow key={'row_'+index} 
        letterArray={currentRow === index ? currentWord.split('') : wordMap[index] ? wordMap[index].split('') : []} />
      })}
    </div>
  );
}