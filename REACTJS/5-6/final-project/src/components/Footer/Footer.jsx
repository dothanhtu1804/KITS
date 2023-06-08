import styled from "styled-components";
import facebook from "assets/components/footer/fb.svg";
import twitter from "assets/components/footer/twitter.svg";
import linkedIn from "assets/components/footer/linkedIn.svg";
import instagram from "assets/components/footer/instagram.svg";
import masterCard from "assets/components/footer/Mastercard-logo.svg.png";
import visa from "assets/components/footer/Visa_Inc._logo.svg.png";
import american_express from "assets/components/footer/american-logo.png";
import maestro from "assets/components/footer/maestro.png";
import paypal from "assets/components/footer/paypal.svg";
import klarna from "assets/components/footer/klarna-740x393.jpg";
import { Button } from "components/Button";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.div`
  .body_footer_main {
    padding: 200px 0 80px 0;
    display: flex;
  }

  .body_footer_main_left {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-right: 27px;
  }

  .body_footer_main_left h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
  }

  .body_footer_main_left p {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #1e2832bf;
  }

  .body_footer_main_left .social {
    display: flex;
    gap: 20px;
  }

  .body_footer_main_right {
    width: 70%;
    padding-left: 27px;
  }

  .body_footer_main_right table{
    width: 100%;
  }

  .body_footer_main_right table tr th {
    text-align: left;
    padding-bottom: 12px;
    width: 38.5%;
  }

  .body_footer_main_right table tr td {
    padding: 6px 0;
  }

  .body_footer_main_right table tr td a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #1e2832;
  }

  .body_footer_main_right table tr td a:hover {
    color: #ff6f61;
  }

  .footer_footer {
    background-color: #1e2832;
  }

  .footer_footer .container .footer_footer_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  .footer_footer .container .footer_footer_main span {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #ffffff;
  }

  .footer_footer .container .footer_footer_main .list_pay {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .footer_footer .container .footer_footer_main .list_pay img {
    height: 24px;
    width: 35px;
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="body_footer_main">
          <div className="body_footer_main_left">
            <h3>Lisa</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="social">
              <Button url={facebook}></Button>
              <Button url={twitter}></Button>
              <Button url={linkedIn}></Button>
              <Button url={instagram}></Button>
            </div>
          </div>
          <div className="body_footer_main_right">
            <table>
              <tr>
                <th>CATALOG</th>
                <th>ABOUT US</th>
                <th>CUSTOMER SERVICES</th>
              </tr>
              <tr>
                <td>
                  <NavLink>Necklaces</NavLink>
                </td>
                <td>
                  <NavLink>Our Producers</NavLink>
                </td>
                <td>
                  <NavLink>Contact Us</NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink>Hoodies</NavLink>
                </td>
                <td>
                  <NavLink>Sitemap</NavLink>
                </td>
                <td>
                  <NavLink>Track Your Order</NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink>Jewelry Box</NavLink>
                </td>
                <td>
                  <NavLink>FAQ</NavLink>
                </td>
                <td>
                  <NavLink>Product Care & Repair</NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink>T-shirt</NavLink>
                </td>
                <td>
                  <NavLink>About Us</NavLink>
                </td>
                <td>
                  <NavLink>Book an Appointment</NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink>Jacket</NavLink>
                </td>
                <td>
                  <NavLink>Terms & Conditions</NavLink>
                </td>
                <td>
                  <NavLink>Shipping & Returns</NavLink>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="footer_footer">
        <div className="container">
          <div className="footer_footer_main">
            <span>© 2023 LISA , Inc.</span>
            <div className="list_pay">
              <img src={masterCard} alt="" />
              <img src={visa} alt="" />
              <img src={american_express} alt="" />
              <img src={paypal} alt="" />
              <img src={maestro} alt="" />
              <img src={klarna} alt="" />
            </div>
            <span>Developer by Đỗ Tú</span>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};
