import React, { useState, useEffect } from "react";
import InfoAboutPainting from "./InfoAboutPainting";

const RequestPaintingToServer = () => {
        const [infoPainting, setInfoPainting] = useState([]);
        useEffect(() => {
        fetch("https://catfact.ninja/fact/")
         .then((response) => response.json())
         .then((data) => {
            setInfoPainting(data);
            })
         .catch((err) => {
            console.log(err.message);
            });
        }, []);
        return (
            <InfoAboutPainting infoPainting={infoPainting} />
            );
}



export default RequestPaintingToServer; 