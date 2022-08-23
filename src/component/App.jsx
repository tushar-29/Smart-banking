import React from "react";
import Header from "./Header";
import {OuterLayout} from "./layout";
import Main from "./main";
import Footer from "./Footer";
//https://www.react-reveal.com/docs/intro/


export default function App() {



    return(
        <div className="App">
            <Header />
            <OuterLayout>
                <Main />
            </OuterLayout>
            <Footer />
        </div>
    );
}
