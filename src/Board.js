import logo from './logo.svg';
import './App.css';
import WordRow from './WordRow';
import { useCallback, useEffect, useState } from 'react';
import './Board.css';

export default function Board({wordMap, clickedLetter, currentWord, currentRow}) {

  const [word, setWord] = useState('');

  const getCharacterArray = useCallback((index) {
    return currentRow === index ? currentWord.split('') : wordMap[index] ? wordMap[index].split('') : []
  }, [currentRow, currentWord, wordMap]);
  
  return (
    <div className="Board">
     { [...Array(5)].map((index) => {
        return <WordRow key={'row_'+index} letterArray={getCharacterArray(index)} />
      })}
    </div>
  );
}