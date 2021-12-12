import React, { Component } from 'react'
import Scanner from './Util/Scanner';
import Result from './Util/Result';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BarcodeScannerComponent.css';
import axios from 'axios';
import request from 'superagent'
import Product from "./Product";


export class BarcodeScannerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      scanCode: '',
      modal: false,
      scanSuccess: false
    };
    this._onDetected = this._onDetected.bind(this);
    this._toggle = this._toggle.bind(this);
    this.toggleButtonState = this.toggleButtonState.bind(this);
  }
  // componentDidMount(){
  //   function toggleButtonState(ibsn)
  //   {
  //     axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:'+{ibsn}+'0451526538&callback=mycallback')
  //     .then(response =>{console.log(response)})
  //     .catch(error=>{console.log(error)})
  //   }
  // }

  render() {
    return (
      <div>
                <Button variant="info" block onClick={this._toggle}>
          Scan Barcode
        </Button>

        {this.state.scanSuccess ? (
          <Result key="scanResult" text={this.state.scanCode} />
        ) : null}
        <input id="scanner_result" type="text" value={this.state.scanCode} />
        <input id="scanner_result" type="text" value={this.state.result} />
        <input id="scanner_result" type="text" value={this.state.scanSuccess} />

        <Modal show={this.state.modal} onHide={this._toggle}>
          <Modal.Header closeButton="true" />
          <Modal.Body>
            <Scanner handleScan={this._onDetected} />
          </Modal.Body>
        </Modal>

        <Button onClick={()=>this.toggleButtonState(this.state.scanCode)}></Button>

        {/* <Product /> */}
      </div>
    )
  }
  _toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      scanSuccess: false
    }));
  }

  toggleButtonState(ibsn)
  {
    // var url ='https://www.googleapis.com/books/v1/volumes?q='+ibsn+'+isbn:keyes&key=AIzaSyAEYBt8poIFNwHX4ZiUoUv0kCvMi_feDts';
    // axios.get(url)
    //   .then(response =>{console.log(response.data)})
    //   .catch(error=>{console.log(error)})

    // -------------------------------------------------------------------
    // request.get("https://www.googleapis.com/books/v1/volumes").query({q:this.state.scanCode})
    // .then((data) => {
    //   console.log(data)
    // })

    let headers = {
      "Content-Type": 'application/json',
      "Authorization": 'YOUR_REST_KEY'
  }
   
  fetch('https://api2.isbndb.com/book/'+ibsn, {headers: headers})
      .then(response => {
        console.log(response.data)
      })
      .then(json => {
          console.log(json)
      })
      .catch(error => {
          console.error('Error:', error)
      });
  
  }



  _onDetected(result) {
    this.setState({
      modal: false,
      scanCode: result ? result.codeResult.code : '',
      scanSuccess: result ? true : false,
      results: result
    });
  }
}


export default BarcodeScannerComponent
