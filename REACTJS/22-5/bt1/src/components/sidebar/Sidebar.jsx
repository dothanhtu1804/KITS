import styled from "styled-components";
import CardSidebar from "components/Card/CardSidebar";
import logo from "../../assets/sidebar/logo.svg";
import SidebarList from "./SidebarList";
import SidebarListItem from "./SidebarListItem";



const SidebarStyled = styled.div`
  height: auto;
  background-color: #fffff;
  padding: 32px;

  .header_sidebar {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
  }

  .header_sidebar img {
    width: 56px;
    height: 56px;
  }

  .body_header_sidebar h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    color: #27262e;
  }

  .body_header_sidebar p {
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    color: #7a797d;
  }
`;
const Sidebar = () => {
  return (
    <SidebarStyled>
        <div className="sidebar_left">
          <div className="sidebar">
            <div className="header_sidebar">
              <img src={logo} alt="" />
              <div className="body_header_sidebar">
                <h1>MyNFT</h1>
                <p>NFT Marketplace</p>
              </div>
            </div>
            <div className="body_sidebar">
              <SidebarList></SidebarList>
            </div>
            <div className="footer_sidebar">
                <CardSidebar width={228} height={184} title ={"Your Balance"} amount={"1,034.02"} percent={"Top Up Balance"}></CardSidebar>
            </div>
          </div>
        </div>
    </SidebarStyled>
  );
};

export default Sidebar;
