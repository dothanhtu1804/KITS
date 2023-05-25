import styled from "styled-components";
import { Button } from "../button";
import ethIcon from "assets/card/eth_icon.svg";

const StyledCard = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  padding: 24px;
  background: ${(props) => props.background};
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;

  /* Text/color2 */

  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;
    font-weight: 500;
    color: #27262e;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
  }
  .eth {
    margin-right: 4px;
  }

  .content{
    margin-bottom: 12px;
  }

  .content span {
    font-size: 24px;
    font-weight: 500;
    line-height: 16px;
    color: #27262e;
  }
`;
const Card = ({ width, height, background, title, amount, content, percent,...rest }) => {
  return (
    <StyledCard
    percent={percent}
    width={width}
    height={height}
    background={background}
    {...rest}
    >
      <div className="title">{title}</div>
      {amount ? (
        <div className="ammount-wrapper">
          <img className="eth" src={ethIcon} alt="eth-icon"></img>
          <span className="amount">{amount}</span> ETH
        </div>
      ) : (
        <div className="content">
          <span>+{content}</span> %
        </div>
      )}
      <Button percent={percent}  boderColor="#E9E9E9">
        {typeof percent === 'string' ? percent : Math.abs(percent)+"%"}
      </Button>
    </StyledCard>
  );
};
Card.defaultProps = {
  padding: "24px",
  background: "white",
  border_radius: "20px",
  font_size: "12px",
  line_height: "16px",
};

export default Card;