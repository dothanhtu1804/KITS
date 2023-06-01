import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/home";
import Dashboard from "containers/dashboard";
import {ListUser} from "containers/user";
import { ListUser2 } from "containers/user"

function App() {
  return (
    <Home>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/list-user" element={<ListUser />} />
        <Route path="/user/list-user2" element={<ListUser2 />} />
      </Routes>
    </Home>
  );
}

export default App;
