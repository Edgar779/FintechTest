import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import API from './services/api';
import config from './config/config';
import { Button, Modal } from 'react-bootstrap';

function Example({...props}) {
    // console.log(...props);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    if(props.open){
        console.log(props);

       return setShow(props.open);
    }

    const handleShow = () => setShow(props);
    // console.log(props.open ==true);

    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Example;