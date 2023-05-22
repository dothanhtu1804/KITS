import logo from './logo.svg';
import './App.css';
import { HelloWorld, HelloWorld2, HelloWorld3, HelloWorld4 } from './components/demo';
import { Counter, Counter2 } from './components/counter';
// import { Demo } from './components/demo';
// import { Demo1 } from './components/demo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld></HelloWorld>
        <HelloWorld2></HelloWorld2>
        <Counter></Counter>
        <Counter2 name="Tus"></Counter2>
      </header>
    </div>
  );
}

export default App;
