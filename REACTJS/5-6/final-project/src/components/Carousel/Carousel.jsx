import React, { useEffect, memo } from "react";
import Slider from "react-slick";
import { ProductCart } from "components/ProductCart";
import styled from "styled-components";

const CarouselStyled = styled.div`
  .slick-slide {
    height: 405px;
  }
`;

const Carousel = ({ data }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <CarouselStyled>
      <Slider {...settings}>
        {data?.map((card) => (
          <ProductCart
            key={card.id}
            img={card.img}
            title={card.title}
            cate={card.cate}
            price_normal={card.price_normal}
            price_decrease={card.price_decrease}
            sale={card.sale}
            hot={card.hot}
          ></ProductCart>
        ))}
      </Slider>
    </CarouselStyled>
  );
};

export default React.memo(Carousel);
