import { Header } from "components/Header";
import { Button } from "components/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import shopping from "assets/components/header/cart2.svg";
import contentImage from "assets/components/header/cac-shop-thoi-trang-o-tphcm-1-3_result.jpg";
import tree from "assets/components/header/tree.svg";
import brand1 from "assets/components/header/brand-1.svg";
import brand2 from "assets/components/header/brand-2.svg";
import brand3 from "assets/components/header/brand-3.svg";
import brand4 from "assets/components/header/brand-4.svg";
import brand5 from "assets/components/header/brand-5.svg";
import popular_main from "assets/components/header/image-category-1.svg";
import popular1 from "assets/components/header/item-category1.svg";
import popular2 from "assets/components/header/item-category2.svg";
import popular3 from "assets/components/header/item-category3.svg";
import popular4 from "assets/components/header/item-category4.svg";
import fillter from "assets/components/header/fillter.svg"

const ContentHeaderHomeStyled = styled.div`
  background-color: #f0f0f0;

  .body_content {
    display: flex;
    justify-content: space-between;
    padding: 80px 0px 40px;
    position: relative;
  }

  .body_content .body_content_left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .body_content .body_content_left h1 {
    font-size: 55px;
    font-weight: 100;
    line-height: 55px;
    margin-bottom: 10px;
  }

  .body_content .body_content_left p {
    font-size: 20px;
    font-weight: 400;
    line-height: 55px;
    margin-bottom: 25px;
  }

  .body_content .body_content_right {
    width: 50%;
  }

  .body_content .body_content_right img {
    width: 350px;
    height: 450px;
    border-radius: 200px 0px;
    box-shadow: 12px 12px 0 0 #f0f0f0, 12px 12px 0px 1px #00000040;
  }

  .furniture_tree {
    position: absolute;
    right: 0px;
    top: 300px;
  }
`;

const ContentHomeStyled = styled.div`
  .brand {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }

  .popular_list {
    display: flex;
    gap: 12px;
    margin-bottom: 80px;
  }

  .popular_list .popular_list_left {
    width: 50%;
  }

  .popular_list .popular_list_left .card_item {
    position: relative;
  }

  .popular_list .popular_list_left .card_item img {
    width: 100%;
    max-height: 528px;
    object-fit: contain;
  }

  .popular_list .popular_list_left .card_item p {
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    transform: rotate(-90deg);
    text-transform: uppercase;
    position: absolute;
    top: 45%;
    left: -55%;
  }

  .popular_list .popular_list_right {
    width: 50%;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 12px;
    row-gap: 12px;
  }

  .popular_list .popular_list_right .card_item {
    position: relative;
  }

  .popular_list .popular_list_right .card_item img {
    max-height: 256px;
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

  .newsletter h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 59px;
    text-align: center;
    margin-bottom: 20px;
  }

  .newsletter .header_newsletter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .newsletter .header_newsletter .header_newsletter_left{
    display: flex;
    gap: 20px;
  }

  .newsletter .header_newsletter .header_newsletter_left a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #00000080;
  }

  .newsletter .header_newsletter .header_newsletter_left a:active {
    color: #000000;
  }
`;

const Home = () => {
  return (
    <>
      <ContentHeaderHomeStyled>
        <div className="container">
          <div className="header_content">
            <Header></Header>
          </div>
          <div className="body_content">
            <div className="body_content_left">
              <h1>Collections</h1>
              <p>
                You can explore ans shop many differnt collection from various
                barands here.
              </p>
              <Button
                url={shopping}
                name_button="Shop Now"
                type="large"
              ></Button>
            </div>
            <div className="body_content_right">
              <img src={contentImage} alt="" className="img_content" />
            </div>
          </div>
        </div>
        <img src={tree} alt="" className="furniture_tree" />
      </ContentHeaderHomeStyled>
      <ContentHomeStyled>
        <div className="container">
          <div className="brand">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
          </div>
          <div className="popular_list">
            <div className="popular_list_left">
              <div className="card_item">
                <img src={popular_main} alt="" />
                <p>Explore new and popular styles</p>
              </div>
            </div>
            <div className="popular_list_right">
              <div className="card_item">
                <img src={popular1} alt="" />
              </div>
              <div className="card_item sale">
                <img src={popular2} alt="" />
              </div>
              <div className="card_item">
                <img src={popular3} alt="" />
              </div>
              <div className="card_item">
                <img src={popular4} alt="" />
              </div>
            </div>
          </div>
          <div className="newsletter">
            <h1>Or Subscribe To The Newsletter</h1>
            <div className="header_newsletter">
              <div className="header_newsletter_left">
                <NavLink>All Products</NavLink>
                <NavLink>T-Shirt</NavLink>
                <NavLink>Hoodies</NavLink>
                <NavLink>Jacket</NavLink>
              </div>
              <div className="header_newsletter_right">
                <Button url={fillter} name_button={"Fillter"} type={"smalls"}></Button>
              </div>
            </div>
          </div>
        </div>
      </ContentHomeStyled>
    </>
  );
};

export default Home;
