import React from "react";
import styled from "styled-components";
import {InnerLayout} from "./layout";
import PriceCard from "./price_card";
import card from "../img/creditcard.svg";
import active from "../img/active.svg";
import inactive from "../img/inactive.svg";
import check from "../img/check.svg";
import checkDisable from "../img/check-disabled.svg"
import {Bounce, Rotate} from "react-reveal";


export default function PaymentSection() {


    return(
        <PaymentSectionStyled>
            <InnerLayout>
                <Bounce direction={"down"} delay={500}>
                    <div>
                        <h3 className="small-heading">
                            An exceptional service, <span>at the right price</span>
                        </h3>
                        <p className="c-para">Start with our free plan and switch to premium as you grow.</p>
                    </div>
                </Bounce>
                <div className="card-container">
                    <Rotate up left delay={100}>
                        <PriceCard
                            account={'Free'}
                            amount={'$0'}
                            text={'Manage your business with a simple and efficient account.'}
                            button={'Get Started'}
                            card={card}
                            active={active}
                            inactive={inactive}
                            check={check}
                            checkDisable={checkDisable}
                            text1={'10 free local transfers'}
                            text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                            text3={'Free payment to other Draft accounts'}
                            text4={'Prepaid debit cards'}
                            text5={'Virtual cards'}
                            text6={'Priority 24/7 support'}
                            text7={'Exchange 24 currencies'}
                            text8={'Multi-user access'}
                        />
                    </Rotate>
                    <Rotate up right delay={100}>
                        <PriceCard
                            account={'Premium'}
                            amount={'$49'}
                            text={'Manage your business with a simple and efficient account.'}
                            button={'Get Started'}
                            card={card}
                            active={active}
                            inactive={inactive}
                            check={check}
                            checkDisable={checkDisable}
                            text1={'10 free local transfers'}
                            text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                            text3={'Free payment to other Draft accounts'}
                            text4={'Prepaid debit cards'}
                            text5={'Virtual cards'}
                            text6={'Priority 24/7 support'}
                            text7={'Exchange 24 currencies'}
                            text8={'Multi-user access'}
                        />
                    </Rotate>
                </div>
            </InnerLayout>
        </PaymentSectionStyled>
    );
}

const PaymentSectionStyled = styled.section` 
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    padding-top: 7.5rem;
  }
  
  @media screen and (max-width: 980px) {
    .card-container {
      padding-top: 3.5rem;
    }
  }
`;
