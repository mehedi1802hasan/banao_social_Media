import React, { useState } from 'react';
import { Container, Row, Col, Image, InputGroup, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../public/logo.png";
import LoginModal from './loginModal';
import { IoIosSearch  } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";

const Nav = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container className='d-flex justify-content-between align-items-center p-3'>
        <div>
        <Image src={logo} alt="" />
        </div>
        <div style={{ position: 'relative', width: '400px' }}>
  <p className='text-center mt-3' style={{ position: 'absolute',  left: '10%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
  <IoIosSearch />

  </p>
  <Form.Control
    style={{ borderRadius: '60px',backgroundColor:"#F2F2F2" }}
    type="text"
    className="border  text-center"
    placeholder="Search for your favorite groups in ATG"
  />
</div>


        <div className='d-flex align-items-center'>
        <h6 >
              Create Account{' '}
              <span>
                <Link to='#' onClick={() => setModalShow(true)}>
                  It's free! <RiArrowDropDownFill className='fs-1 text-dark' />

                </Link>
              </span>
            </h6>
        </div>
        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
        
    
  );
};

export default Nav;