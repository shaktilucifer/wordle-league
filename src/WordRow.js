import LetterBlock from './LetterBlock.tsx';
import './WordRow.css';

export default function WordRow({letterArray}) {

  return (
    <div className="word-row">
        {[...Array(5)].map((_, val) => {
          return <LetterBlock letter={letterArray[val]} />        
        })}
    </div>
  );
}