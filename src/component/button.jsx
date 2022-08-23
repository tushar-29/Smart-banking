import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";
import blob1 from "../img/blob_top.svg";
import blob2 from "../img/blob_bottom.svg";


export function PrimaryButton(props) {

    return(
        <PrimaryButtonStyled>
            {props.name}
        </PrimaryButtonStyled>
    );
}

const PrimaryButtonStyled = styled.button`
  background-color: #F44E77; //$--accent-pink
  padding: 0.7rem 2rem;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: 3px solid #F44E77;
  cursor: pointer;

  &:hover {
    background: #fa2b5c;
  }

  &:active {
    margin-top: 5px;
    border: 3px solid #f17c99;
  }
`;


export function SecondaryButton(props) {

    return(
        <SecondaryButtonStyled>
            {props.name}
            <img src={arrow} alt="NOT FOUND" className="arrow" />
            <img src={blob1} alt="NOT FOUND" className="blob1" />
            <img src={blob2} alt="NOT FOUND" className="blob2" />
        </SecondaryButtonStyled>
    );
}

const SecondaryButtonStyled = styled.button`
  background-color:#16194F; // darkprimary
  display: flex;
  align-items: center;
  padding: 0.9rem 2rem;
  font-size: inherit;
  color: inherit; 
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  
  .arrow{
    transition: all .4s ease-in-out;
    padding-left: .9rem;
  }
  &:hover {
    color: #F44E77;
    .blob1{
      transition: all .4s ease-in-out;
      transform: translateX(-100px);
    }
    .blob2{
      transition: all .4s ease-in-out;
      transform: translateX(140px);
    }
    .arrow {
      transition: all .4s ease-in-out;
      transform: translateX(15px);
      padding-left: 2rem;
    }
  }
  .blob1, .blob2 {
    transition: all .4s ease-in-out;
    position: absolute;
    pointer-events: none;
  }
  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
  img{
    padding-left: 0.9rem;
  }
  
`;


export function AnimatedButton(props) {

    return(
        <AnimatedButtonStyled>
            {props.name}
            <img src={arrow} alt="NOT FOUND" className="arrow" />
            <img src={blob1} alt="NOT FOUND" className="blob1" />
            <img src={blob2} alt="NOT FOUND" className="blob2" />
        </AnimatedButtonStyled>
    );
}
const AnimatedButtonStyled = styled.button`
  background-color:#16194F; // darkprimary
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: inherit;
  color: inherit; 
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  
  .arrow{
    transition: all .4s ease-in-out;
    padding-left: .9rem;
  }
  &:hover {
    color: #F44E77;
    .blob1{
      transition: all .4s ease-in-out;
      transform: translateX(-100px);
    }
    .blob2{
      transition: all .4s ease-in-out;
      transform: translateX(140px);
    }
    .arrow {
      transition: all .4s ease-in-out;
      transform: translateX(10px);
      padding-left: 2rem;
    }
  }
  .blob1, .blob2 {
    transition: all .4s ease-in-out;
    position: absolute;
    pointer-events: none;
  }
  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
`;
