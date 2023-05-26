import Search from "components/search/Search";
import styled from "styled-components";
import Circle from "components/circle";
import Bell from "assets/header/bell.svg"
import Avatar1 from "assets/header/avatar1.svg"

const HeaderStyled = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  .header_right{
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <Search></Search>
      <div className="header_right">
        <Circle width={"24px"} height={"24px"} url_image={Bell} padding={"16px"}></Circle>
        <Circle width={"56px"} height={"56px"} url_image={Avatar1} padding={"none"}></Circle>
      </div>
    </HeaderStyled>
  );
};

export default Header;
