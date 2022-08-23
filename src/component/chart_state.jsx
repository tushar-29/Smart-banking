import React from "react";
import styled from "styled-components";


export default function ChartState({name, amount}) {
    
    
    return(
        <ChartStateStyled>
            <p><b>{name}</b></p>
            <h4>{amount}</h4>
        </ChartStateStyled>
    );
}

const ChartStateStyled = styled.div`
  background-color: white;   
  border-radius: 50px;
  border: 1px solid #CAB6F1;
  height: 10rem;
  padding: 2rem 1.2rem;
  width: 48%;
  box-shadow: 0 25px 50px rgb(22, 25, 79, 0.05);
  
  
  p {
    color: black;
  }
  h4 {
    font-size: 3rem;
    color: #554DDE; // $--purple-primary
  }
  
  @media screen and (max-width: 1280px) {
    text-align: center;
    height: auto;
    padding: 1.5rem .5rem;
    
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 980px) {
    padding: 1rem .5rem;
    
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: .8rem;
    }
  }
`;
 