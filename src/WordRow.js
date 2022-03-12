import LetterBlock from './LetterBlock.tsx';
import './WordRow.css';

export default function WordRow({letterArray}) {

  return (
    <div className="word-row">
        {[0, 1, 2, 3, 4].map((val) => {
          return <LetterBlock letter={letterArray[val]} />        
        })}
    </div>
  );
}