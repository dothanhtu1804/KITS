import styled from "styled-components";
import search from "assets/header/search.svg";

const SearchStyled = styled.div`
  form {
    position: relative;
  }
  #search {
    width: 461px;
    padding: 17px 0 17px 60px;
    border: none;
    border-radius: 35px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #b9b8bc;
  }

  form img {
    content: "";
    background: url(${search});
    position: absolute;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    top: 15px;
    left: 24px;
  }
`;

const Search = () => {
  return (
    <SearchStyled>
      <form action="">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Item, Collection and Account.."
        />
        <img src={search} alt="" />
      </form>
    </SearchStyled>
  );
};

export default Search;
