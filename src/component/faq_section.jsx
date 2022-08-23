import React from "react";
import styled from "styled-components";
import {InnerLayout} from "./layout";
import lines from "../img/lines.svg";
import questions from "./faq_question";
import Question from "./question";
import { Fade, Bounce } from "react-reveal";


export default function FAQSection() {
    
    
    return(
        <FAQSectionStyled>
            <InnerLayout>
                <Bounce down delay={500}>
                    <h3 className="small-heading">
                        Frequently <span>asked questions</span>
                    </h3>
                </Bounce>
                <p className="c-para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet asperiores culpa dolore, earum enim est eveniet ex
                            expedita fugiat, ipsa, iusto laboriosam molestiae
                </p>
                <div className="lines">
                    <img src={lines} alt="NOT FOUND"/>
                </div>
                <Fade up>
                    <div className="question-container">
                        {
                            questions.map((q) =>
                                <Question key={q.id} title={q.title} description={q.description} />
                            )
                        }
                    </div>
                </Fade>
            </InnerLayout>
        </FAQSectionStyled>
    );
}

const FAQSectionStyled = styled.section`
    .c-para {
      width: 60%;
      margin: 0 auto;
    }
    .lines{
      position: absolute;
      left: 0;
      top: 362%;
      width: 100%;
      z-index: -1;
      img {
        width: 100%;
      }
    }
  .question-container {
    padding-top: 4rem;
  } 
  @media screen and (max-width: 1280px) {
    .c-para {
      width:  70%;
    }
    .lines {
      top: 390%;
    }
  }
  @media screen and (max-width: 980px) {
    .c-para {
      width:  60%;
    }
    .lines {
      top: 350%;
    }
  }
`;
 