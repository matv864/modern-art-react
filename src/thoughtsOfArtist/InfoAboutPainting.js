import React from "react"


class InfoAboutPainting extends React.Component{
    render(){
        console.log("InfoAboutPainting", this.props.infoPainting)
        return (
            <h1>
                {this.props.infoPainting.fact}
            </h1>
        )
    }
}


export default InfoAboutPainting;


