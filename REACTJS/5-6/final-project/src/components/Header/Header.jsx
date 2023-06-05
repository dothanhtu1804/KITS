import styled from "styled-components";
import { Search } from "components/Search";
import { Button } from "components/Button";
import user from "assets/components/header/user.svg";
import shopping from "assets/components/header/cart.svg";

const HeaderStyled = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 9px;
    border-bottom: 1px solid #e3e3e3;
  }

  .left_header .search form {
    position: relative;
  }

  .left_header .search form img {
    position: absolute;
  }

  .center_header h1 {
    font-family: "AmstelvarAlpha";
    font-size: 42px;
    font-weight: 400;
    line-height: 50px;
  }

  .right_header {
    display: flex;
    gap: 25px;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="left_header">
          <Search></Search>
        </div>
        <div className="center_header">
          <h1>Lisa Store</h1>
        </div>
        <div className="right_header">
          <Button url={user} name_button="Account"></Button>
          <Button url={shopping} name_button="Shopping"></Button>
        </div>
      </div>
    </HeaderStyled>
  );
};
