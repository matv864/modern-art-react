import "./ArtistSlide.css"

import { NavLink } from "react-router-dom";

function ArtistSlide(){
    return (
        <div className="artist-slide">
            <div className="artist-title">
                <div>
                    "Связь с художником"
                </div>
            </div>
            <div className="artist-info-grid">
                <div className="artist-info-flex">
                    <div className="artist-info-text">
                        <p align="center">
                            Каждая картина скрывает за собой <br/>
                            крапотливую работу художника. <br/>
                            И мы предлагаем вам увидеть <br/>
                            заметки о работе художника, <br/>
                            его источники вдохновения,<br/>
                            или же просто послушать музыку,<br/> 
                            которая позволит прочувстовать <br/>
                            атмосферу самой картины.<br/>

                        </p>
                    </div>
                </div>
                <div className="artist-info-flex">
                    <a className="btn btn-dark" href="/thoughts-of-artist">попробовать</a>
                </div>
            </div>
        </div>
    )
}


export default ArtistSlide;