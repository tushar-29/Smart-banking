import React from "react";
import styled from "styled-components";
import CardSection from "./card_section";
import ChartSection from "./chart_section";
import MessagingSection from "./messaging_section";
import PaymentSection from "./payment_section";
import FAQSection from "./faq_section";



export default function Main() {
    
    
    return(
        <MainStyled>
            <CardSection />
            <ChartSection />
            <MessagingSection />
            <PaymentSection />
            <FAQSection />
        </MainStyled>
    );
}

const MainStyled = styled.main`
    
    `;
 