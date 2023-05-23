import logo from "./logo.svg";
import "./App.css";
import {
  HelloWorld,
  HelloWorld2,
  HelloWorld3,
  HelloWorld4,
} from "./components/demo";
import { Counter, Counter2 } from "./components/counter";
import styled from "styled-components";
import { Button } from "components/button/Button";
import { Card } from "components/Card/Card";
// import { Demo } from './components/demo';
// import { Demo1 } from './components/demo1';

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
    <AppWrapper>
      <header className="App-header">
        <div className="list_card">
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Spending"} amount="2.00" percent={11}></Card>
          <Card title={"ROI"} content={14.02} percent={-12.3}></Card>
          <Card title={"Estimated"} amount="38.00" percent={0}></Card>
        </div>
      </header>
    </AppWrapper>
  );
}

export default App;
