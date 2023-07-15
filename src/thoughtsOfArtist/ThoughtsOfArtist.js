import React from 'react';
import Scanner from './Scanner';


class ThoughtsOfArtist extends React.Component{
    constructor(props){
        super(props)
        this.state = {idOfPainting: null}
    }





    render(){
        if (this.state.idOfPainting == null){
            return ( <Scanner handleScan={(id) => {this.setState({idOfPainting: id})}} /> )   
        }
        else{
            return (
                <div>
                    <h1>it's thoughts-of-artist</h1>
                    <h1>{this.state.idOfPainting}</h1>
                </div>
            )
        }
    }


}




export default ThoughtsOfArtist; 


