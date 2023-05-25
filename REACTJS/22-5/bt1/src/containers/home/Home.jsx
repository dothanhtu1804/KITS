import React from 'react';
import styled  from 'styled-components';
import {
  HelloWorld,
  HelloWorld2,
  HelloWorld3,
  HelloWorld4,
} from "../../components/demo";
import { Counter, Counter2 } from "../../components/counter";
import { Button } from "../../components/button";
import Card from "../../components/Card";
import { Link } from 'react-router-dom';
import { PrimaryLayout } from 'components/Layout';

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
  .card-wrapper {
    width: 350px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <header className="App-header">
        <nav>
            <h1>Home</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </nav>
          <div className="card-wrapper">
            {/* <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            <Card title={"Revenue"} amount="4.02" percent={12.3}></Card>
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card> */}
          </div>
        </header>
      </AppWrapper>
    </PrimaryLayout>
  );
};
export default Home;