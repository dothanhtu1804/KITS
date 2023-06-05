import styled from "styled-components";
import search from "assets/components/header/icon.svg";

const SearchStyled = styled.div`
  form {
    position: relative;
  }
  #search {
    padding: 17px 0 17px 30px;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #b9b8bc;
    background: none;
  }

  form img {
    content: "";
    background: url(${search});
    position: absolute;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    top: 15px;
    left: 0px;
  }
`;

export const Search = () => {
  return (
    <SearchStyled>
      <form action="">
        <input
          type="search"
          name="search"
          id="search"
          placeholder=""
        />
        <img src={search} alt="" />
      </form>
    </SearchStyled>
  );
};

