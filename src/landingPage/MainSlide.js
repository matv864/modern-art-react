import "./MainSlide.css"
function MainSlide(){
    return (
        <div className="main-slide">
            <div className="main-title">
                <div>
                    ЦИ
                </div>
            </div>
            <div className="main-info-grid">
                <div className="main-info-flex">
                    <div className="main-info-text">
                        <p align="center">
                        Съешь этих мягких французских булок,<br/> 
                        да выпей чаю. А ещё <br/>
                        это классное место.
                        </p>
                    </div>
                </div>
                <div className="main-info-flex">
                    <a href="https://google.com" className="btn btn-dark">меню</a>
                </div>
            </div>
        </div>
    )
}


export default MainSlide;