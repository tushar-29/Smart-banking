import React from "react";
import styled from "styled-components";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";
import { Fade } from "react-reveal";


export default function Question(props) {

    const [toggle, setToggle] = React.useState(false);

    function getToggle() {
        setToggle(!toggle);
    }

    return(
        <QuestionStyled>
            <div className="q-container">
                <div className="toggle-title" onClick={getToggle}>
                    <h4>{props.title}</h4>
                    <button>
                        {!toggle && <img src={plus} alt="" />}
                        {toggle && <img src={minus} alt={""} />}
                    </button>
                </div>
                <Fade down>
                    {toggle && <p>{props.description} </p>}
                </Fade>
            </div>
        </QuestionStyled>
    );
}

const QuestionStyled = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1.4rem;
  border-radius: 24px;
  transition: all .4s ease-in-out;
  box-shadow: 0 25px 50px rgba(22, 25, 79, 0.05);
  
  p {
    transition: all .4s ease-in-out;
  }
  
  h4 {
    color: #16194F;
    font-size: 1.3rem;
  }
  
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .4s ease-in-out;
    
    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all .4s ease-in-out;
      }
    }
  @media screen and (max-width: 1280px) {
    padding: .7rem;
    border-radius: 18px;
    margin: 1rem 2rem;
    
    h4 {
      font-size: 1rem;
    }
    img {
      height: 80%;
      width: 80%;
    }
  }
  
  @media screen and (max-width: 980px) {
    padding: .5rem;
    border-radius: 18px;
    margin: 1rem 4rem;
    
    h4 {
      font-size: .8rem;
    }
    img {
      height: 50%;
      width: 50%;
    }
  }  
`;
 