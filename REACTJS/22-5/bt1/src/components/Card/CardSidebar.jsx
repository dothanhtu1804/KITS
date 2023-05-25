import styled from "styled-components";
import { Button } from "../button";
import ethIcon from "assets/card/eth_icon.svg";
import ethIcon2 from "assets/card/eth_icon2.svg";
import eth from "assets/card/eth.svg";

const StyledCard = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  padding: 24px;
  background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  padding: 32px 16px 16px 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position:relative;

  /* Text/color2 */

  color: #747475;
  .title {
    color: #e0dee5;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  .amount {
    font-size: 30px;
    font-weight: 700;
    line-height: 39px;
    color: #ffffff;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: #FFFFFF;
  }
  .eth {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    padding: 5px;
    background-color: #edf0f4;
    margin-right: 4px;
  }

  .content {
    margin-bottom: 12px;
  }

  .content span {
    font-size: 24px;
    font-weight: 500;
    line-height: 16px;
    color: #27262e;
  }

  &:after {
    content: "";
    background-image: url(${eth});
    width: 93px;
    height: 150px;
    position: absolute;
    left: 13px;
    top:41px;
  }
`;
const CardSidebar = ({
  width,
  height,
  title,
  amount,
  content,
  percent,
  ...rest
}) => {
  return (
    <StyledCard width={width} height={height} {...rest}>
      <div className="title">{title}</div>
      {amount ? (
        <>
          <span className="amount">{amount}</span>
          <div className="ammount-wrapper">
            <img className="eth" src={ethIcon2} alt="eth-icon"></img>
            ETH
          </div>
        </>
      ) : (
        <div className="content">
          <span>+{content}</span> %
        </div>
      )}
      <Button percent={percent} sidebar={true} boderColor="#E9E9E9">
        {typeof percent === "string" ? percent : Math.abs(percent) + "%"}
      </Button>
    </StyledCard>
  );
};

export default CardSidebar;
