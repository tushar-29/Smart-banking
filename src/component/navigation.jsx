import React from "react";
import styled from "styled-components"
import {PrimaryButton} from "./button";
import logo from "../img/logo.svg";

export default function Navigation() {

    const [isClicked, SetIsClicked] = React.useState([true, false,  false]);

    function GetIsClicked(event) {
        console.log(event.target.value)
        const name = event.target.name;
        event.preventDefault();
        SetIsClicked(() => {
                if (name === "Home")
                    return ([true, false, false]);
                else if (name === "Features")
                    return ([false, true, false]);
                else if (name === "Pricing")
                    return ([false, false, true]);
                else
                    return ([true, false, false]);
            }
        );

    }

    return(
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="NOT FOUND" />
            </div>
            <ul>
                <li className={isClicked[0] ? "border_bottom" : ""} onClick={GetIsClicked}>
                    <a href="/#Home" name={"Home"}>Home</a>
                </li>
                <li className={isClicked[1] ? "border_bottom" : ""} onClick={GetIsClicked}>
                    <a href="/#Features" name={"Features"}>Features</a>
                </li>
                <li className={isClicked[2] ? "border_bottom" : ""} onClick={GetIsClicked}>
                    <a href="/#Pricing" name={"Pricing"}>Pricing</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'}/>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
  display: flex;
  //position: fixed;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  li {
    padding: 5px;
    color: #d3d3d3;
  }

  li:hover {
    border-bottom: 5px solid #c4415f;
    border-radius: 15%;
  }

  li:active {

  }

  .border_bottom {
    color: white;
    border-bottom: 5px solid #F44E77;
    border-radius: 15%;
    transition: all .4s ease-in-out;
  }


  @media screen and (max-width: 1280px) {
    min-height: 5vh;
  }
  @media screen and (max-width: 980px) {
    min-height: 3vh;
  }
`;
