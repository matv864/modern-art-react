import React from "react";


import MainSlide from "./MainSlide";
import WhoIsSlide from "./WhoIsSlide";
import ArtistSlide from "./ArtistSlide";

import "./LandingPage.css"




function LandingPage (){
    return (
        <div className="landing-page">
            <div className="landing-column">
                <MainSlide/>
                <WhoIsSlide/>
                <ArtistSlide/>
            </div>
        </div>
    )
    }

export default LandingPage;




