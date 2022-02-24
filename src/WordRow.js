import logo from './logo.svg';
import './App.css';
import LetterBlock from './LetterBlock';

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

export default App;
