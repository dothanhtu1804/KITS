import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './containers/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
