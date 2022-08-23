import React from "react";
import styled from "styled-components";
import {SecondaryButton} from "./button";
import phone from "../img/phone.svg";
import ring1 from "../img/ring_orange.svg";
import message1 from "../img/message_pink.svg";
import message2 from "../img/message_blue.svg";
import { Bounce } from "react-reveal";

export default function HeaderContent() {


    return(
         <HeaderContentStyled>
            <div className="left-content">
                <Bounce right duration={2500}>
                    <div className="left-text-container">
                        <h1>Smart banking for freelancers</h1>
                        <p className="white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores, blanditiis culpa eligendi esse fugit incidunt ipsum maiores pariatur qui repellat ullam vitae! Aut beatae laudantium provident qui saepe temporibus!
                        </p>
                        <SecondaryButton
                            name={"Register Now"}/>
                    </div>
                 </Bounce>
            </div>
             <div className="right-content">
                     <img src={phone} alt="Not Found" className="phone" />
                 <Bounce left delay={2300}>
                    <img src={ring1} alt="Not Found" className="ring1"/>
                 </Bounce>
                 <Bounce left delay={2600}>
                    <img src={message1} alt="Not Found" className="message1"/>
                 </Bounce>
                 <Bounce right delay={2900}>
                    <img src={message2} alt="Not Found" className="message2"/>
                 </Bounce>
             </div>

        </HeaderContentStyled>
    );
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  
  .left-content {
    display: flex;
    align-items: center;
    h1{
      font-size: 3rem;
      font-weight: 600;
    }
    
    .white{
      padding:1.4rem 0;
      color: white;
      line-height: 1.8rem;
    }
  }
  .right-content{
    position: relative;
    display: flex;
    justify-content: center;
    
    .phone {
      width: 80%;
      animation: Size 5s infinite;
      transition: all .3s ease-in-out;
    }
    .ring1{
      position: absolute;
      bottom: 20%;
      right: 0;
      left: auto;
      animation: Rotate 10s infinite;
      transition: all 4s ease-in-out;
    }
    .message1{
      position: absolute;
      width: 20%;
      top: 5%;
      right: 5%;
      left: auto;
      animation: Move 5s infinite;
      transition: all .3s ease-in-out;
    }
    
    .message2{
      position: absolute;
      width: 22%;
      left: 0;
      bottom: 20%;
      transition: all .4s ease-in-out;
      animation: Move 10s infinite;
      animation-delay: .5s;
    }
    
    //Header Animations
    .message1 {
      @keyframes Move {
        0% {
          transform: translateY(0) rotate(0) scale(1) translateX(0);             
        }
        50% {
          transform: translateY(-10px) rotate(15deg) scale(1.1) translateX(10px);
        }
        100% {
          transform: translateY(0) rotate(0) scale(1) translateX(0);
        }
      }
    }
    
    .ring1 {
      @keyframes Rotate {
        0% {
          transform:rotate(0) ;             
        }
        50% {
          transform:rotate(90deg);
        }
        100% {
          transform:rotate(0);
        }
      }
    }   

    .phone {
      @keyframes Size {
        0% {
          transform: scale(1);             
        }
        50% {
          transform:scale(1.05);
        }
        100% {
          transform:scale(1);
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    padding-top: 3rem;
      
    .left-content h1 {
        font-size: 2.5rem;
      }
    .white{
      padding:1rem 0;
      color: white;
      line-height: 1.4rem;
    }
    .right-content {
      margin-left: 2rem;
      padding-top: 3rem;
      
      .ring1 {
        width: 22%;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 1rem 0 2rem 0;
      
    .left-content {
      h1 {
        font-size: 2.5rem;
      }
      .white {
        padding: 1rem 0;
        color: white;
        line-height: 1.6rem;
      }
    }
    .right-content {
      margin-left: 2rem;
      padding-top: 3rem;
      
      .ring1 {
        width: 22%;
      }
    }
    .right-content {
      .message1 {
        top: 13%;
      }
    }
  }
  
  @media screen and (max-width: 980px) {
    padding: 1rem 0 2rem 0;

    .left-content {
      h1 {
        font-size: 2rem;
      } 
      .white {
        line-height: 1.4rem;
      }
    }
    .right-content {
      .message1 {
        top: 13%;
      }
    }
  }
`;
