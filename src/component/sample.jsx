import React, {useEffect} from "react";
import styled from "styled-components";
import LocomotiveScroll form "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss';


export default function Sample() {

    const [preloader, setPreloader] = React.useState(true);
    const [timer, setTimer] = React.useState(3);

    const id = React.useRef(null);

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((timer) => timer - 1)
        }, 1000)
    }, []);

    useEffect(() => {
        if (timer === 0) {
            getClearScreen();
        }
    });

    function getClearScreen() {
        window.clearInterval(id.current);
        setPreloader(false);
    }

    return(
        <SampleStyled>
            {preloader ?(
                <div>
                    <h1>I am for {timer} seconds</h1>
                </div>
            ):(
                <div data-scroll-container>
                    <h1>This is real Content after the timer</h1>
                </div>
            )}
        </SampleStyled>
    );
}

function useLocalScroll(start) {
    useEffect(() => {
        if (!start) return;
        const localScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-revel',
        })
    }, [start]);
}

const SampleStyled = styled.header`
    
`;
