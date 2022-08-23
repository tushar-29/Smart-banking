import React from "react";
import styled from "styled-components";
import {InnerLayout} from "./layout";
import logo from "../img/logo.svg";


export default function Footer() {


    return(
        <FooterStyled>
            <InnerLayout>
                <div className="footer-container">
                    <div className="logo-container">
                        <div className="logo-items">
                            <img src={logo} alt="" />
                            <p>
                                Copyright @2022 Lorem ipsum.<br />
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                    <ul className="bottom-nav">
                        <div className="links1">
                            <li>
                                <a href={"/"}>Team</a>
                            </li>
                            <li>
                                <a href={"/"}>Press</a>
                            </li>
                            <li>
                                <a href={"/"}>Fees</a>
                            </li>
                        </div>

                        <div className="links2">
                            <li>
                                <a href={"/"}>Services</a>
                            </li>
                            <li>
                                <a href={"/"}>Projects</a>
                            </li>
                            <li>
                                <a href={"/"}>About Us</a>
                            </li>
                        </div>

                        <div className="links3">
                            <li>
                                <a href={"/"}>Terms of use</a>
                            </li>
                            <li>
                                <a href={"/"}>Privacy Policy</a>
                            </li>
                            <li>
                                <a href={"/"}>Contact Us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
  padding: 0 18rem;
  background-color: #DCE2F0;
  
  .footer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 90px;
    }
  }
  
  .bottom-nav {
    display: flex;
    justify-content: space-between;
    li {
      padding: 2rem 0;
      color: #16194F;
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 0 12rem;
    
    .logo-container img {
      width: 80px;
    }
  }
  
  @media screen and (max-width: 980px) {
    padding: 0 8rem;
    
    .logo-container img {
      width: 60px;
    }
  }
`;
