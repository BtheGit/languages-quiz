import React from 'react';
import { Button, Modal } from 'react-bootstrap';


const StartModal = React.createClass({
  getInitialState() {
    return { showModal: true };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>


        <Modal className="modalBox" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>The Hardest Language Quiz In The World!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you think you have what it takes?</p>
            <p>Can you identify every language correctly?</p>
            <p>Do you know the difference between Middle High German and Middle Low German?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-danger" id="modalButton" onClick={this.close}>Start</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default StartModal;