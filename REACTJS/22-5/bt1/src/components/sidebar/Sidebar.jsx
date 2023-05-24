import styled from "styled-components";
import Card from "components/Card";
import logo from "../../assets/sidebar/logo.svg";

const SidebarStyled = styled.div`
  #sidebar {
    display: flex;
  }

  .sidebar_left {
    background-color: tomato;
  }

  .sidebar_right {
    width: 100%;
    background-color: chocolate;
  }

  .sidebar {
    padding: 32px;
  }

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
      <div id="sidebar">
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

            </div>
            <div className="footer_sidebar">
                <Card width={228} height={220} height_sidebar={50} sidebar ={true}  background={"linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%)"} title ={"Your Balance"} content={"1,034.02"} percent={"Top Up Balance"}></Card>
            </div>
          </div>
        </div>
        <div className="sidebar_right"></div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
