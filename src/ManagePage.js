import React from "react";
import { BrowserRouter, Routes, Route }
    from 'react-router-dom';


import Header from "./header/Header"
import ThoughtsOfArtist from "./thoughtsOfArtist/ThoughtsOfArtist"
import LandingPage from "./landingPage/LandingPage";

const ManagePage = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route path='/thoughts-of-artist' element={<ThoughtsOfArtist />} />
            </Routes>
                
        </BrowserRouter>
    );
}



export default ManagePage; 