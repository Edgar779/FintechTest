import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import API from './services/api';
import config from './config/config';
import Example from "./Example";
// or less ideally
import { Button,Modal } from 'react-bootstrap';
function Fintech() {
  const [name, setName] = useState('');
  const [isOPen, setisOPen] = useState(false);
  const [show, setShow] = useState(false);
  const [median, setMedian] = useState('');
  const [average, setAverage] = useState('');
  const [small, setSmall] = useState('');

  const handleClose = () => setShow(false);

  function getPrice(){
    const formData = {
      name
    }

    API.post(`${config.API_URL}/getDB`, formData)
      .then((response) => {
   

setShow(true);
setMedian(response.data.median);
setAverage(response.data.average);
setSmall(response.data.small);
// setText(response.data)
// console.log(response.data);


          // return this.setState({ banks });

      })
      .catch(function (error) {
          console.log(error);
      });
  }
  function setname(e){
    
   setName(e.target.value);

    // setName()
  }
  return (
    <div className="App">
      <header className="App-header">
      <div class="input-group mb-3">

      <input type="text" value={name} onChange={setname} class="form-control" placeholder="Recipient's username"  aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" onClick={getPrice}>Button</button>
  </div>
  </div>
  <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
  <Modal.Body>{small}դրամ--{median}դրամ--{average}դրամ</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </header>
    </div>
  );
}

export default Fintech;
