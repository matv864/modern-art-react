import React from "react";


import "./MainPage.css"
import MainSlide from "./MainSlide";
import WhoIsSlide from "./WhoIsSlide";


function MainPage (){
    return (
        <div className="flex-container">
            <MainSlide/>
            <WhoIsSlide/>
        </div>
    )
    }

export default MainPage;




