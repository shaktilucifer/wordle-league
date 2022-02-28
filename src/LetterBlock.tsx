import logo from './logo.svg';
import './LetterBlock.css';

export default function LetterBlock({letter=''}: LetterBlockProps) {
  return (
    <div className="letter-block">
      {letter}
     </div>
  );
}

interface LetterBlockProps {
  letter: string;
}
