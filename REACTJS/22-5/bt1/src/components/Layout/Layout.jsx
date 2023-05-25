import Header from "components/header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Sidebar from "components/sidebar/Sidebar";

const LayoutStyled = styled.div`
display: flex;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  background-color: #f23412;
  margin-top: 64px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  background-color: #aaf031;
  float: left;
  width: 20%;
  height: 100vh;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <Sidebar/>
      <div className="right">
        <Header />
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;