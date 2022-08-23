import React from "react";
import styled from "styled-components";
import {InnerLayout} from "./layout";
import avatar1 from "../img/avatar1.svg";
import avatar2 from "../img/avatar2.svg";
import avatar3 from "../img/avatar3.svg";
import avatar4 from "../img/avatar4.svg";
import avatar5 from "../img/avatar5.svg";
import messaging from "../img/conversation.svg";
import bgCircles from "../img/circleBg.svg";
import { Fade } from "react-reveal";

export default function MessagingSection() {

    // const [isHoverMessage, setIsHoverMessage] = React.useState(false);
    //
    // function getIsHoverMessage(event) {
    //     console.log(event.view.scrollY);
    //     setIsHoverMessage((prev) => !prev);
    // }

    return(
        <MessagingSectionStyled>
            {/*<div onMouseEnter={getIsHoverMessage} onMouseLeave={getIsHoverMessage}>*/}
           <InnerLayout>
               <div className="message-container">
                   <Fade right>
                   {/*<div className={isHoverMessage ? "left_to_right_in_animation" : "left_to_right_out_animation"}>*/}

                       <div className="left-items">
                           <img src={bgCircles} alt="" className="bgCircles1"/>
                           <h2 className="secondary-heading">
                               We support you in 5 different languages.
                           </h2>
                           <p className="left-items-p">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               A accusamus aperiam aspernatur consectetur distinctio eligendi error,
                               est expedita itaque magni mollitia nemo perferendis sed veniam!
                           </p>

                           <div className="images-container">
                               <img src={avatar1} alt="NOT FOUND" className="image-1"/>
                               <img src={avatar2} alt="NOT FOUND" className="image-2"/>
                               <img src={avatar3} alt="NOT FOUND" className="image-3"/>
                               <img src={avatar4} alt="NOT FOUND" className="image-4"/>
                               <img src={avatar5} alt="NOT FOUND" className="image-5"/>
                               <p>&nbsp; +25</p>
                           </div>
                       </div>
                    </Fade>

                   <Fade left>
                   {/*<div className={isHoverMessage ? "right_to_left_in_animation" : "right_to_left_out_animation"}>*/}
                       <div className="right-items">
                           <img src={messaging} alt="NOT FOUND" className={"chat-image"} />
                           <img src={bgCircles} alt="" className="bgCircles2"/>
                       </div>
                   {/*</div>*/}
                    </Fade>
               </div>
           </InnerLayout>
        </MessagingSectionStyled>
    );
}

const MessagingSectionStyled = styled.section`
    .message-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .left-items {
      padding-right: 2rem;
      position: relative;

      .left-items-p {
        padding: 2rem 0;
      }
      
      .bgCircles1 {
        position: absolute;
        top: -7%;  
        left: -10%;
        z-index: -1;
      }
      

      .images-container {
        display: flex;
        align-items: center;

        .image-2, .image-3, .image-4, .image-5 {
          margin-left: -22px;
        }
      }
    }
  
  .right-items {
    position: relative;
    
    img {
      padding-left: 2rem;
    }
    .bgCircles2 {
      position: absolute;
      bottom: -7%;
      right: 0;
      z-index: -1;
    }
  }
  @media screen and (max-width: 1280px) {
    .chat-image {
      width: 95%;
      height: 80%;
    }
  }
  @media screen and (max-width: 980px) {
    .chat-image {
      width: 95%;
      height: 80%;
    }
  }
`;
 