import styled from "styled-components";

const ProductCartStyled = styled.div`
  position: relative;

  img {
    width: 100%;
    max-height: 333px;
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
  }

  .hot:before{
    content: "HOT";
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    color: #ffffff;
    padding: 8px 12px;
    background-color: #FF6F61;
    top: 30px;
    left: -4px;
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
  console.log(sale);
  return (
    <ProductCartStyled>
      {sale == true ? <div className="sale"></div> : ""}
      {hot == true ? <div className="hot"></div> : ""}
      <img src={img} alt="" />
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
