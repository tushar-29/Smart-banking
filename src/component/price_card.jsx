import React from "react";
import styled from "styled-components";


export default function PriceCard(props) {
    
    
    return(
        <PriceCardStyled id="Pricing">
            <h4 className="card-title">{props.account}</h4>
            <h4 className="card-title">{props.amount} <span>/m</span></h4>
            <p className="c-para">{props.text}</p>

            <div className="button-container">
                <button>{props.button}</button>
            </div>

            <div className="card-con">
                <img src={props.card} alt="NOT FOUND" />
            </div>


            <div className="plan-container">
                <img src={props.active} alt=""/>
                <img src={props.inactive} alt=""/>
            </div>

            <div className="list-container">
                <p className="text-check">
                    <img src={props.check} alt=""/>
                    {props.text1}
                </p>
                <p className="text-check">
                    <img src={props.check} alt=""/>
                    {props.text2}
                </p>
                <p className="text-check">
                    <img src={props.check} alt=""/>
                    {props.text3}
                </p>
                <p className="text-check">
                    <img src={props.check} alt=""/>
                    {props.text4}
                </p>
                <p className="text-check">
                    <img src={props.check} alt=""/>
                    {props.text5}
                </p>
                <p className="text-check text-disable">
                    <img src={props.checkDisable} alt=""/>
                    {props.text6}
                </p>
                <p className="text-check text-disable">
                    <img src={props.checkDisable} alt=""/>
                    {props.text7}
                </p>
                <p className="text-check text-disable">
                    <img src={props.checkDisable} alt=""/>
                    {props.text8}
                </p>
            </div>

        </PriceCardStyled>
    );
}

const PriceCardStyled = styled.div`
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 50px;
  box-shadow: 0 25px 50px rgba(22 25 79 0.05);

  .card-title {
    font-size: 2rem;
    color: #000;
    text-align: center;
    padding: 1.5rem 0;

    span {
      font-size: 1.5rem;
    }
  }

  .button-container {
    text-align: center;
    padding: 1.5rem 0;

    button {
      margin: 2px;
      border: 2px solid #16194F;
      padding: .8rem 1.8rem;
      outline: none;
      cursor: pointer;
      background: transparent;
      border-radius: 20px;
      font-size: inherit;
      color: #16194F;
    }

    button:hover {
      color: white;
      background: #16194F;
    }
    button:active {
      border-color: white;
    }

  }

  .card-con {
    display: flex;
    justify-content: center;

    img {
      width: 70%;
    }
  }

  .plan-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;

    img {
      padding: 0 .3rem;
    }
  }

  .text-check {
    display: flex;
    align-items: center;
    padding: .4rem 0;

    img {
      padding-right: 0.3rem;
      width: 24px;
    }
  }

  .text-disable {
    color: #B7B7B7;
  }

  @media screen and (max-width: 980px) {
    padding: 1rem;

    .card-title {
      padding: 0.8rem 0;
    }
  }
`;
 