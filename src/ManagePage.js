import React from "react";
import { BrowserRouter, Routes, Route }
    from 'react-router-dom';


import NavBar from "./navBars/NavBar"
import ThoughtsOfArtist from "./thoughtsOfArtist/ThoughtsOfArtist"
import MainPage from "./mainPage/MainPage";

const ManagePage = () => {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route exact path='/' element={<MainPage />} />
                <Route path='/thoughts-of-artist' element={<ThoughtsOfArtist />} />
            </Routes>
        </BrowserRouter>
    );
}



export default ManagePage; 