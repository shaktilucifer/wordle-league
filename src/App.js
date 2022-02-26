import logo from './logo.svg';
import './App.css';
import Board from './Board';
import KeyBoard from './Keyboard';

function App() {
  return (
    <div className="App">
        <header><strong>WORDLE LEAGUE</strong></header>
        <Board/>
        <KeyBoard />
    </div>
  );
}

export default App;
