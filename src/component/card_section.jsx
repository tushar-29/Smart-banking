import React from "react";
import styled from "styled-components";
import {InnerLayout} from "./layout";
import card from "../img/creditcard.svg";
import { Fade } from "react-reveal";


export default function CardSection() {
    // const [isHoverCard, setIsHoverCard] = React.useState(false);

    // function getIsHoverCard(event) {
    //     console.log(event.view);
    //     console.log(event.view.scrollY);
    //     const scroll_value = event.view.scrollY;
    //
    //     if (scroll_value >= 0 && scroll_value <= 20)
    //         setIsHoverCard(true);
    //     else
    //         setIsHoverCard(true);
    // }

    return(
        <CardSectionStyled id={"Features"}>
            {/*<div onWheel={getIsHoverCard}>*/}
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <Fade right>
                        {/*<div className={isHoverCard ? "left_to_right_in_animation" : "left_to_right_out_animation"}>*/}
                            <h2 className="secondary-heading">
                                One card for all payments
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias aliquid cumque debitis deserunt enim eos, eum expedita id, inventore ipsum nulla possimus similique.
                            </p>
                        {/*</div>*/}
                        </Fade>
                    </div>
                        <div className="card-right">
                            <Fade left>
                            {/*<div className={isHoverCard ? "right_to_left_in_animation" : "right_to_left_out_animation"}>*/}
                                <img src={card} alt="Not found" />
                            {/*</div>*/}
                            </Fade>
                        </div>
                </div>
            </InnerLayout>
            {/*</div>*/}
        </CardSectionStyled>
    );
}

const CardSectionStyled = styled.section`
    .card-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
  .card-right {
    display: flex;
    justify-content: flex-end;
    
    img {
      @media screen and (max-width: 1280px) {
        width: 85%;
      }
    }
  }
  
  .card-left {
    p {
      padding: 1.5rem 0;
    }
  }
`;
