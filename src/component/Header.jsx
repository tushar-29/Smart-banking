import React from "react";
import styled from "styled-components";
import bg from '../img/bg.svg';
import Navigation from "./navigation";
import HeaderContent from "./header_content";

export default function Header() {


    return(
        <div>
            <HeaderStyle id={"Home"}>
                <div className="header-content">
                    <Navigation />
                    <HeaderContent />
                </div>
            </HeaderStyle>
        </div>
    );
}

 const HeaderStyle = styled.header`
   height: 100vh;
   width: 100%;
   background-position-y: 100%;
   background-image: url(${bg});
   background-repeat: no-repeat;
   background-size: cover;

   .header-content {
     padding: 0 18rem;
   }
   @media screen and (max-width: 1280px) {
     height: 90%;
     .header-content {
       padding: 0 8rem;
     }
   }
   
   @media screen and (max-width: 980px) {
     .header-content {
       padding: 0 4rem;
     }
   }
 `;

 