import { Header } from "components/Header";
import { Button } from "components/Button";
import { ProductCart } from "components/ProductCart";
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
import fillter from "assets/components/header/fillter.svg";
import newsletter1 from "assets/components/header/image-product.svg";
import newsletter2 from "assets/components/header/image-product-1.svg";
import newsletter3 from "assets/components/header/image-product-2.svg";
import newsletter4 from "assets/components/header/image-product-3.svg";
import newsletter5 from "assets/components/header/image-product-4.svg";
import newsletter6 from "assets/components/header/image-product-5.svg";
import newsletter7 from "assets/components/header/image-product-6.svg";
import newsletter8 from "assets/components/header/image-product-7.svg";
import background_collection from "assets/components/header/background_collection.svg";
import title_collection from "assets/components/header/logo_collection.svg";
import background_collection2 from "assets/components/header/logo_collection2.svg";
import { Carousel } from "react-bootstrap";

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
  /* style cho brand */

  .brand {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }

  /* style cho danh sách phổ biến */

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

  /* style cho newsletter */

  .newsletter {
    margin-bottom: 80px;
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
    margin-bottom: 20px;
  }

  .newsletter .header_newsletter .header_newsletter_left {
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

  .newsletter .header_newsletter .header_newsletter_left a:hover {
    color: #ff6f61;
  }

  .newsletter .header_newsletter .header_newsletter_left a:active {
    color: #000000;
  }

  .newsletter .body_newsletter {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 12px;
    row-gap: 12px;
  }

  /* style for collection */

  .collection {
    background-image: url(${background_collection});
    background-size: cover;
    background-repeat: no-repeat;
    height: 900px;
    position: relative;
    margin-bottom: 80px;
  }

  .collection .background_collection2 {
    position: absolute;
    top: 100px;
    right: -30px;
  }

  .collection .body_collection {
    position: absolute;
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    top: 30%;
    left: 60%;
  }

  .collection .body_collection img {
    height: 80px;
    width: 180px;
  }

  .collection .body_collection p {
    font-size: 26px;
    font-weight: 400;
    line-height: 40px;
    color: #ff6f61;
  }

  /* style cho danh sách bán chạy */

  .best_seller {
    margin-bottom: 80px;
  }

  .best_seller h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 59px;
    text-align: center;
    margin-bottom: 20px;
  }

  .best_seller .header_best_seller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .best_seller .header_best_seller .header_best_seller_left {
    display: flex;
    gap: 20px;
  }

  .best_seller .header_best_seller .header_best_seller_left a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #00000080;
  }

  .best_seller .header_best_seller .header_best_seller_left a:hover {
    color: #ff6f61;
  }

  .best_seller .header_best_seller .header_best_seller_left a:active {
    color: #000000;
  }

  .best_seller .body_best_seller {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 12px;
    row-gap: 12px;
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
                <Button
                  url={fillter}
                  name_button={"Fillter"}
                  type={"small"}
                ></Button>
              </div>
            </div>
            <div className="body_newsletter">
              <ProductCart
                img={newsletter5}
                title={"Nike Sportswear Futura Luxe"}
                cate={"Bag"}
                price_normal="130.00"
                hot={true}
              ></ProductCart>
              <ProductCart
                img={newsletter4}
                title={"Adicolor Classics Joggers"}
                cate={"Dress"}
                price_normal="63.85"
                sale={true}
              ></ProductCart>
              <ProductCart
                img={newsletter6}
                title={"Geometric print Scarf"}
                cate={"Scarf"}
                price_normal="53.00"
              ></ProductCart>
              <ProductCart
                img={newsletter1}
                title={"Yellow Reserved Hoodie"}
                cate={"Dress"}
                price_normal="364.00"
                price_decrease="155.00"
              ></ProductCart>
              <ProductCart
                img={newsletter8}
                title={"Basic Dress Green"}
                cate={"Dress"}
                price_normal="236.00"
              ></ProductCart>
              <ProductCart
                img={newsletter7}
                title={"Nike Air Zoom Pegasus"}
                cate={"Shoe"}
                price_normal="220.00"
                price_decrease="198.00"
              ></ProductCart>
              <ProductCart
                img={newsletter2}
                title={"Nike Repel Miler"}
                cate={"Dress"}
                price_normal="120.50"
              ></ProductCart>
              <ProductCart
                img={newsletter3}
                title={"Nike Sportswear Futura Luxe"}
                cate={"Glasses"}
                price_normal="160.00"
              ></ProductCart>
            </div>
          </div>
        </div>
        <div className="collection">
          <div className="body_collection">
            <img src={title_collection} alt="" />
            <p>
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </p>
            <Button name_button={"See Collection"} type={"collection"}></Button>
          </div>
          <img
            src={background_collection2}
            alt=""
            className="background_collection2"
          />
        </div>
        <div className="container">
          <div className="best_seller">
            <h1>Best Sellers</h1>
            <div className="header_best_seller">
              <div className="header_best_seller_left">
                <NavLink>All Products</NavLink>
                <NavLink>T-Shirt</NavLink>
                <NavLink>Hoodies</NavLink>
                <NavLink>Jacket</NavLink>
              </div>
              <div className="header_best_seller_right">
                <Button name_button={"Show All"} type={"small"}></Button>
              </div>
            </div>
            <div className="body_best_seller">
              <ProductCart
                img={newsletter4}
                title={"Adicolor Classics Joggers"}
                cate={"Dress"}
                price_normal="63.85"
                sale={true}
              ></ProductCart>
              <ProductCart
                img={newsletter5}
                title={"Nike Sportswear Futura Luxe"}
                cate={"Bag"}
                price_normal="130.00"
                hot={true}
              ></ProductCart>
              <ProductCart
                img={newsletter6}
                title={"Geometric print Scarf"}
                cate={"Scarf"}
                price_normal="53.00"
              ></ProductCart>
              <ProductCart
                img={newsletter1}
                title={"Yellow Reserved Hoodie"}
                cate={"Dress"}
                price_normal="364.00"
                price_decrease="155.00"
              ></ProductCart>
            </div>
          </div>
        </div>
      </ContentHomeStyled>
    </>
  );
};

export default Home;
