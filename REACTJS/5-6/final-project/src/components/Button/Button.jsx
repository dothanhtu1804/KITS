import styled from "styled-components";

const ButtonDefaultStyled = styled.div`
  button {
    display: flex;
    gap: 11px;
    border: none;
    align-items: center;
  }

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
`;

const ButtonLargeStyled = styled.div`
  button {
    display: flex;
    gap: 11px;
    padding: 12px 15px;
    background-color: #1e2832;
    align-items: center;
    width: fit-content;
    border: none;
  }

  button:hover {
    background-color: tomato;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
    color: #ffffff;
  }
`;

export const Button = ({ url, name_button, type }) => {
  console.log(url, name_button, type);
  switch (type) {
    case "small":
      break;
    case "large":
      return (
        <ButtonLargeStyled url={url} name_button={name_button}>
          <button>
            <img src={url} alt="" />
            <span>{name_button}</span>
          </button>
        </ButtonLargeStyled>
      );
    default:
      return (
        <ButtonDefaultStyled url={url} name_button={name_button}>
          <button>
            <img src={url} alt="" />
            <span>{name_button}</span>
          </button>
        </ButtonDefaultStyled>
      );
  }
};
