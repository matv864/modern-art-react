import React from "react";
import { BrowserRouter, Routes, Route }
    from 'react-router-dom';


import NavBar from "./navBars/NavBar"
import ThoughtsOfArtist from "./thoughtsOfArtist/ThoughtsOfArtist"
import MainPage from "./mainPage/MainPage";
import { Container, Row } from "react-bootstrap";

const ManagePage = () => {
    return (
        <BrowserRouter>
            <Container fluid>
                <Row>
                    <NavBar/>
                </Row>
                <Row>
                    <Routes>
                        <Route exact path='/' element={<MainPage />} />
                        <Route path='/thoughts-of-artist' element={<ThoughtsOfArtist />} />
                    </Routes>
                </Row>
            </Container>
        </BrowserRouter>
    );
}



export default ManagePage; 