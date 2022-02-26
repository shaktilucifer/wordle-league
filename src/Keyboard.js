import logo from './logo.svg';
import './LetterBlock.css';

const KEYBOARD_VALUES = [[q,w,e,r,t,y,u,i,o,p], [a,s,d,f,g,h,j,k,l], [z,x,c,v,b,n,m]];

export default function KeyBoard() {
  return (
    <div className="keyBoard">
      {KEYBOARD_VALUES.map((rowValues) => {
        return <div className='keyBoard__row'>
          {rowValues.map((letter) => {
            <button>{letter}</button>
          })}
          </div>
      })}
     </div>
  );
}
