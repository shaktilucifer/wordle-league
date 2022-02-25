import logo from './logo.svg';
import './App.css';
import WordRow from './WordRow';
import { useEffect, useState } from 'react';

export default function Board() {

  const [word, setWord] = useState('tests');

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