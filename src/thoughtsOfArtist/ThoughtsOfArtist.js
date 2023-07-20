import React from 'react';
import Scanner from './Scanner';
import RequestPaintingToServer from "./RequestPaintingToServer"


class ThoughtsOfArtist extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {idOfPainting : null}
        this.setIdOfPainting = (idOfPainting) => {
            console.log("paint", idOfPainting)
            this.setState({idOfPainting : idOfPainting})
    }


    }

    render(){
        if (this.state.idOfPainting === null){
            return ( <Scanner handleScan={this.setIdOfPainting} /> )   
        }
        else{
            return (
                <RequestPaintingToServer idOfPainting={this.idOfPainting} />
            )
        }
    }


}




export default ThoughtsOfArtist; 


