import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import post1 from "../../public/post1.png";
import man1 from "../../public/man1.png";
import post2 from "../../public/post2.png";
import man2 from "../../public/man2.png";
import post3 from "../../public/post3.png";
import man3 from "../../public/man3.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";


const Post = () => {
    return (
        <div>
<div className='mt-4 d-flex justify-content-center'>
            <Container  className='row d-flex justify-content-between '>
                <div className='col-12 col-md-6 d-flex '>
                    <h6  style={{ marginLeft: '0',fontWeight: 'bold' }}>All Post(35)</h6>
                    <h6 style={{ marginLeft: '20px' }}>Article</h6>
                    <h6 style={{ marginLeft: '20px' }}>Event</h6>
                    <h6 style={{ marginLeft: '20px' }}>Education</h6>
                    <h6 style={{ marginLeft: '20px' }}>Jobs</h6>
                </div>
                <div className='col-6 col-md-4 d-flex align-items-center'>
                <Button style={{ marginLeft: '20px' }} variant="warning">Warning</Button>
                <Button style={{ marginLeft: '20px' }} variant="warning">Warning</Button>

                </div>
            </Container>
        </div>

        <div>
      <Container>

      {/**-----card 1------------ */}

      <Card className="w-100 w-md-50" style={{ maxWidth: "600px" }}>
      <Card.Img variant="top" src={post1} />
      <Card.Body>
      <Card.Title>✍️ Article</Card.Title>

        <div className='d-flex justify-content-between align-items-center'>
        <Card.Title style={{width:"500px"}}>What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
        <p style={{ fontWeight: 'bold' }}>...</p>        </div>
        <Card.Text>
        I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
        </Card.Text>
         <div className='d-flex justify-content-between align-items-center'>
         <div className='d-flex justify-content-center align-items-center'>
           <img
      className="rounded-circle "
      src={man1}
      alt=""
      style={{ height: '50px',width:'50px' }}
    />
     <h6  className='ms-2'>
     Sarah West
         </h6>
           </div>
           
           <div className='d-flex justify-content-between align-items-center gap-5'>
         <div className=' d-flex align-items-center gap-2 '>
         <IoEyeOutline className='fs-5'/>
           <h6 className='mt-1'>1.4k views</h6>
         </div>
           <IoShareSocial className='fs-5' />
           </div>
         </div>
       </Card.Body>
    </Card>

{/*---------------card 2------------ */}

<Card className="w-100 w-md-50" style={{ maxWidth: "600px" }}>
      <Card.Img variant="top" src={post2} />
      <Card.Body>
      <Card.Title>🔬️ Education</Card.Title>
      <div className='d-flex justify-content-between align-items-center'>
        <Card.Title style={{width:"500px"}}>Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
        <p style={{ fontWeight: 'bold' }}>...</p>      
        </div>
       
        <Card.Text>
        I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
        </Card.Text>
         <div className='d-flex justify-content-between align-items-center'>
         <div className='d-flex justify-content-center align-items-center'>
           <img
      className="rounded-circle "
      src={man2}
      alt=""
      style={{ height: '50px',width:'50px' }}
    />
     <h6  className='ms-2'>
     Sarthak Kamra
    </h6>
           </div>
           
           <div className='d-flex justify-content-between align-items-center gap-5'>
         <div className=' d-flex align-items-center gap-2 '>
         <IoEyeOutline className='fs-5'/>
           <h6 className='mt-1'>1.4k views</h6>
         </div>
           <IoShareSocial className='fs-5' />
           </div>
         </div>
       </Card.Body>
    </Card>

{/**---------------card 3------------ */}
<Card className="w-100 w-md-50" style={{ maxWidth: "600px" }}>
      <Card.Img variant="top" src={post3} />
      <Card.Body>
      <Card.Title>🗓️ Meetup</Card.Title>

      <div className='d-flex justify-content-between align-items-center'>
        <Card.Title style={{width:"500px"}}>Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
        <p style={{ fontWeight: 'bold' }}>...</p>  
         </div>
        
        {/* <Card.Text>
        Ive worked in UX for the better part of a decade. From now on, I plan to re
        </Card.Text> */}
         <div className='d-flex justify-content-between align-items-center'>
         <div className='d-flex justify-content-center align-items-center'>
           <img
      className="rounded-circle "
      src={man3}
      alt=""
      style={{ height: '50px',width:'50px' }}
    />
     <h6  className='ms-2'>
     Sarthak Kamra
    </h6>
           </div>
           
           <div className='d-flex justify-content-between align-items-center gap-5'>
         <div className=' d-flex align-items-center gap-2 '>
         <IoEyeOutline className='fs-5'/>
           <h6 className='mt-1'>1.4k views</h6>
         </div>
           <IoShareSocial className='fs-5' />
           </div>
         </div>
       </Card.Body>
    </Card>

      </Container>

        </div>

        </div>
    );
};

export default Post;
