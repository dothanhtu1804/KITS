import logo from "./logo.svg";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from "react-router-dom";
import styled  from 'styled-components';
import { Home } from "containers/home";
import { Login } from "containers/login";
import { About } from "containers/about";
import { Not_found } from "containers/404";
import Sidebar from "components/sidebar/Sidebar";

const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }

  .list_card{
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;
function App() {
  return (
    // <AppWrapper>
    //   <header className="App-header">
    //     <div className="list_card">
    //       <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
    //       <Card title={"Spending"} amount="2.00" percent={11}></Card>
    //       <Card title={"ROI"} content={14.02} percent={-12.3}></Card>
    //       <Card title={"Estimated"} amount="38.00" percent={0}></Card>
    //     </div>
    //   </header>
    // </AppWrapper>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="*" element={<Not_found/>}/>
    </Routes>
  );
}

export default App;
