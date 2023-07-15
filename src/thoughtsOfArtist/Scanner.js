import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

class Scanner extends Component {
  constructor(props){
    
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
    handleScan(data){
        console.log(data)
        if (data != null){
            /*if ((id^0) === id){ */
            if(data.text){
                this.props.handleScan(data.text)
            }
        }
    }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          <div>
            {this.state.text}
          </div>
      </div>
    )
  }
}









export default Scanner; 