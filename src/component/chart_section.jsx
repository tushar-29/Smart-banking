import React from "react";
import styled from "styled-components";
import {InnerLayout} from "./layout";
import ChartState from "./chart_state";
import chart from "../img/chart.svg";
import {AnimatedButton} from "./button";
import { Fade } from "react-reveal";


export default function ChartSection() {
    // const [isHoverChart, setIsHoverChart] = React.useState(false);
    //
    // function getIsHoverChart() {
    //     setIsHoverChart((prev) => !prev);
    // }
    
    return(
        <ChartSectionStyled>

             {/*<div onMouseEnter={getIsHoverChart} onMouseLeave={getIsHoverChart}>*/}
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <Fade right>
                        {/*<div className={isHoverChart ? "left_to_right_in_animation" : "left_to_right_out_animation"}>*/}
                            <div className="states">
                                <div className="states-money">
                                    <ChartState name={'Balance'} amount={'$250'} />
                                    <ChartState name={'Last Transaction'} amount={'$1000'} />
                                </div>
                                <img src={chart} alt="Not Found" />
                            </div>
                        {/*</div>*/}
                        </Fade>
                    </div>
                    <Fade left>
                     {/*<div className={isHoverChart ? "right_to_left_in_animation" : "right_to_left_out_animation"}>*/}
                        <div className="chart-right">
                            <h2 className="secondary-heading">
                                Manage your finance like a pro in no time
                            </h2>
                            <p>
                                With Draft, book keeping, banking, and invoices are all in one place. You will always know where you stand.
                            </p>
                            <AnimatedButton name={'Learn More'} />
                        </div>
                     {/*</div>*/}
                    </Fade>
                </div>
            </InnerLayout>
             {/*</div>*/}
        </ChartSectionStyled>
    );
}

const ChartSectionStyled = styled.section`
  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    .chart-left {
      width: 80%;
      //@media screen and (max-width: 1500px) {
      //  padding: 5rem 14rem;
      //}
      
      .states {
        .states-money {
          display: flex;
          padding-bottom: 1.3rem;
          justify-content: space-between;
        }
        img{
          box-shadow: 0 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 62px;
          width: 100%;
        }
      }
    }
    
    .chart-right {
      padding-left: 2rem;
      p{
        padding: 1.3rem 0;
      }
    }
  }
`;
 