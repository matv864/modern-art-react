import React, { useState, useEffect } from "react";

const CatFact = () => {
        const [fact, setFact] = useState([]);
        useEffect(() => {
        fetch("https://catfact.ninja/fact/")
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setFact(data);
            })
         .catch((err) => {
            console.log(err.message);
            });
        }, []);
        return (
            <h1>
               {fact.fact}
            </h1>
            );
}



export default CatFact; 