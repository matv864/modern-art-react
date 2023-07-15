import React from "react";

class MainPage extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <h1>It's main page</h1>
            </div>
        )
    }

}

export default MainPage;




