import styled from "styled-components";
import facebook from "assets/components/footer/fb.svg";
import twitter from "assets/components/footer/twitter.svg";
import linkedIn from "assets/components/footer/linkedIn.svg";
import instagram from "assets/components/footer/instagram.svg";
import { Button } from "components/Button";

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
    color: #1E2832BF;
  }

  .body_footer_main_left .social {
    display: flex;
    gap: 20px;
  }

  .body_footer_main_right table tr th{
    text-align: left;
    margin-bottom: 22px;
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
                    <td>Necklaces</td>
                    <td>Our Producers</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                    <td>Hoodies</td>
                    <td>Sitemap</td>
                    <td>Track Your Order</td>
                </tr>
                <tr>
                    <td>Jewelry Box</td>
                    <td>FAQ</td>
                    <td>Product Care & Repair</td>
                </tr>
                <tr>
                    <td>T-shirt</td>
                    <td>About Us</td>
                    <td>Book an Appointment</td>
                </tr>
                <tr>
                    <td>Jacket</td>
                    <td>Terms & Conditions</td>
                    <td>Shipping & Returns</td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};
