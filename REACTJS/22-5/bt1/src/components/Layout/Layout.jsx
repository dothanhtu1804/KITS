import Header from "components/header";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "components/sidebar/Sidebar";
import Card_banner from "components/card_banner";

const LayoutStyled = styled.div`
  display: flex;
  background-color: #caeae6;
  .right {
    width: 100%;
    padding: 32px;
  }

  #detail_page {
    display: grid;
    grid-template-columns: 65% 35%;
  }

  #detail_page .list_card_video .header_list {
    display: flex;
    justify-content: space-between;
  }

  #detail_page .list_card_video .header_list h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
  }

  #detail_page .list_card_video .header_list .category {
    display: flex;
    gap: 12px;
  }

  #detail_page .list_card_video .header_list .category .category-item a {
    padding: 5px 12px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #7a797d;
  }

  #detail_page .list_card_video .header_list .category .category-item a:hover {
    background-color: #5429ff1a;
    color: #5429ff;
    border-radius: 30px;
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
      <Sidebar />
      <div className="right">
        <Header />
        <Card_banner></Card_banner>
        <div id="detail_page">
          <div className="list_card_video">
            <div className="header_list">
              <h3>Trending Auctions</h3>
              <div className="category">
                <div className="category-item">
                  <NavLink to={"/"}>Art</NavLink>
                </div>
                <div className="category-item">
                  <NavLink to={"/"}>Music</NavLink>
                </div>
                <div className="category-item">
                  <NavLink to={"/"}>Collectibles</NavLink>
                </div>
                <div className="category-item">
                  <NavLink to={"/"}>Utility</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="list_creator"></div>
        </div>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
