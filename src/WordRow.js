import LetterBlock from './LetterBlock.tsx';

export default function WordRow(letterArray=['t','e','s','t','s']) {
  
  return (
    <div className="word-row">
        {letterArray.map((letter) => {
          return <LetterBlock letter={letter} />        
        })}
    </div>
  );
}