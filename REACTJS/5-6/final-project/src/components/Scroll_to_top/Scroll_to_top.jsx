import styled from "styled-components";
import arrow_top from "assets/components/footer/arrow-top.svg";
import { useEffect } from "react";

const ScrollToTopStyled = styled.div`
  .scroll_to_top {
    height: 50px;
    width: 50px;
    background-color: #ff6f61;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: fixed;
    bottom: 60px;
    right: 80px;
  }
`;

const ScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ScrollToTop = () => {
  return (
    <ScrollToTopStyled>
      <div className="scroll_to_top" onClick={ScrollTop}>
        <img src={arrow_top} alt="" />
      </div>
    </ScrollToTopStyled>
  );
};
