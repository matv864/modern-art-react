import React, { Component } from 'react'
import QrReader from 'modern-react-qr-reader'

class Scanner extends Component {
  constructor(props){
    
    
    super(props)
    this.state = {
      result: null,
    }

    this.handleScan = (data) => {
        if (data){
          console.log(data)
            /*if ((id^0) === id){ */
            this.props.handleScan(data.text)
        }
    }
    this.handleError = (err) => {
      console.error(err)
    }

  }
 


  render(){
    const previewStyle = {
      height: 300,
      width: 300
    };

    return(
      <div>
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={this.handleError}
          onScan={this.handleScan}
          style={previewStyle}
        />
          <div>
            {this.state.text}
          </div>
      </div>
    )
  }
}









export default Scanner; 