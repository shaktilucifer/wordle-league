import logo from './logo.svg';
import './Keyboard.css';

const KEYBOARD_VALUES = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['Enter','z','x','c','v','b','n','m', '<<==']];

export default function KeyBoard({onClickKey}) {

  return (
    <div className="keyBoard">
      {KEYBOARD_VALUES.map((rowValues) => {
        return <div className='keyBoard__row'>
          {rowValues.map((letter) => {
            return <button onClick={() => onClickKey(letter)} className='keyBoard__button'>{letter}</button>
          })}
          </div>
      })}
     </div>
  );
}
