import styled from "styled-components";
import { Button } from "components/Button";
import heart from "assets/components/header/heart.svg";
import search from "assets/components/header/search-white.svg";
import shopping from "assets/components/header/cart2.svg"

const ProductCartStyled = styled.div`
  position: relative;

  .header_card{
    position: relative;
  }

  .header_card .img_product {
    width: 100%;
    max-height: 333px;
  }

  .header_card .action {
    position: absolute;
    background-color: #1e2832;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 6px;
    width: 95%;
    bottom: 4px;
    transition: all 0.35s ease-in;
    opacity: 0;
    visibility: hidden;
  }

  .header_card .action .action_left{
    display: flex;
    gap: 13px;
  }

  .header_card .action .action_right span{
    color: #ffffff;
  }

  .body_card {
    padding: 9px 5px;
  }

  .body_card h6 {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 8px;
  }

  .body_card .detail_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body_card .detail_info .category {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #00000080;
  }

  .body_card .detail_info .price span {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #000000;
  }

  .body_card .detail_info .price .sale_price {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .body_card .detail_info .price .sale_price span {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #00000080;
  }

  .body_card .detail_info .price .sale_price .decrease {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    text-decoration-line: none;
    color: #ff6f61;
  }

  .sale:before {
    content: "SALE";
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    color: #ffffff;
    padding: 8px 12px;
    background-color: #1e2832;
    top: 30px;
    left: -4px;
    z-index: 10;
  }

  .hot:before {
    content: "HOT";
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    color: #ffffff;
    padding: 8px 12px;
    background-color: #ff6f61;
    top: 30px;
    left: -4px;
    z-index: 10;
  }

  &:hover{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    .action{
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const ProductCart = ({
  img,
  title,
  cate,
  price_normal,
  price_decrease,
  sale,
  hot,
}) => {
  return (
    <ProductCartStyled>
      {sale == true ? <div className="sale"></div> : ""}
      {hot == true ? <div className="hot"></div> : ""}
      <div className="header_card">
        <img src={img} alt="" className="img_product"/>
        <div className="action">
          <div className="action_left">
            <Button url={heart}></Button>
            <Button url={search}></Button>
          </div>
          <div className="action_right">
            <Button url={shopping} name_button={"Shop Now"}></Button>
          </div>
        </div>
      </div>
      <div className="body_card">
        <h6>{title}</h6>
        <div className="detail_info">
          <span className="category">{cate}</span>
          <div className="price">
            {price_decrease ? (
              <div className="sale_price">
                <span>${price_normal}</span>
                <span className="decrease">${price_decrease}</span>
              </div>
            ) : (
              <span>${price_normal}</span>
            )}
          </div>
        </div>
      </div>
    </ProductCartStyled>
  );
};
