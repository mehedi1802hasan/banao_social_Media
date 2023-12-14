import React from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import login from "../../public/login.png";
function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{borderBottom:"none"}}>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6 className='text-center p-3' style={{backgroundColor:"#EFFFF4",color:"#008A45"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6>
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='d-flex justify-content-center p-3'>
                       {/** 1st part authentication and Form */}

             <Col >

              <h3>Sign In</h3>
             <Form.Group className='mt-3'>
             <Form.Control
              className='p-3'
            required
            type="text"
            placeholder="Enter your Email "
          />
           <Form.Control
           className='p-3'
            required
            type="text"
            placeholder="Enter your Password "
          />
           <p style={{backgroundColor:"#2F6CE5",borderRadius:"20px",color:"white"}} className='w-100 text-center p-3 mt-2'>Sign In</p>

             </Form.Group>
             <p style={{ borderRadius: "10px", borderColor: "#D9D9DB", border: "1px solid #D9D9DB" }} className='w-100 text-center p-3 d-flex justify-content-center align-items-center gap-2 '><FaFacebook className='fs-3' style={{color:"blue"}} />
Sign in with Facebook</p>
            <p style={{ borderRadius: "10px", borderColor: "#D9D9DB", border: "1px solid #D9D9DB" }} className='w-100 p-3 text-center d-flex justify-content-center align-items-center gap-2 '><FcGoogle className='fs-3 ' />
Sign in with Google</p>

             
             </Col>


             {/** 2nd part link and image */}
             <Col className='d-none d-md-flex d-lg-flex'>
               <div>
               <h6>Don’t have an account yet?           <span style={{ color: 'blue', textDecoration: 'underline' }}>
            Create new for free!
          </span>
 </h6>
               <img className='mt-5' src={login} alt="" />
               </div>

             </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{borderTop:"none"}}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
