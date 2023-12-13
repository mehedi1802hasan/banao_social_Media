import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6 className='text-center p-2' style={{color:"#008A45"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
