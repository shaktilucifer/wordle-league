import logo from './logo.svg';
import './App.css';
import LetterBlock from './LetterBlock.tsx';

export default function WordRow() {
  return (
    <div className="word-row">
        <LetterBlock />
        <LetterBlock />
        <LetterBlock />
        <LetterBlock />
        <LetterBlock />
    </div>
  );
}