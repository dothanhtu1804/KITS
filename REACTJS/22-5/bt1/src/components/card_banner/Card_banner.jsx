import styled from "styled-components";
import banner1 from "assets/banner/Rectangle 13.svg";
import { Card } from "components/Card";
import { Button } from "components/button";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Card_bannerStyled = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  height: 354px;
  margin-bottom: 32px;

  *.carousel {
    margin: 0;
    padding: 0;
  }

  .statistic {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 15px;
  }

  .carousel-item img {
    height: 354px;
    object-fit: cover;
    border-radius: 12px;
  }

  .carousel-caption {
    position: absolute;
    top: 77px;
    left: 60px;
    text-align: unset;
  }

  .carousel-caption h3 {
    font-size: 54px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
`;

const Card_banner = () => {
  return (
    <Card_bannerStyled>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Discover, Create and Sell Your Own NFT.</h3>
            <Button
              width={"128px"}
              height={"46px"}
              mr={"10px"}
              content={"Discover"}
            ></Button>
            <Button
              width={"128px"}
              height={"46px"}
              bgColor={"none"}
              boderColor={"#FFFFFF"}
              textColor={"#FFFFFF"}
              content={"Create"}
            ></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Discover, Create and Sell Your Own NFT.</h3>
            <Button
              width={"128px"}
              height={"46px"}
              mr={"10px"}
              content={"Discover"}
            ></Button>
            <Button
              width={"128px"}
              height={"46px"}
              bgColor={"none"}
              boderColor={"#FFFFFF"}
              textColor={"#FFFFFF"}
              content={"Create"}
            ></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Discover, Create and Sell Your Own NFT.</h3>
            <Button
              width={"128px"}
              height={"46px"}
              mr={"10px"}
              content={"Discover"}
            ></Button>
            <Button
              width={"128px"}
              height={"46px"}
              bgColor={"none"}
              boderColor={"#FFFFFF"}
              textColor={"#FFFFFF"}
              content={"Create"}
            ></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="statistic">
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
      </div>
    </Card_bannerStyled>
  );
};

export default Card_banner;
