import React, { useState } from 'react';
import { Button, Card, Container} from 'react-bootstrap';
import post1 from "../../public/post1.png";
import man1 from "../../public/man1.png";
import post2 from "../../public/post2.png";
import man2 from "../../public/man2.png";
import post3 from "../../public/post3.png";
import man3 from "../../public/man3.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";


const Post = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const handleClick = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setShowDropdown1(!showDropdown1);
        break;
      case 2:
        setShowDropdown2(!showDropdown2);
        break;
      case 3:
        setShowDropdown3(!showDropdown3);
        break;
      default:
        break;
    }
  };

  const handleItemClick = (item, dropdownNumber) => {
    // Handle the click on dropdown items as needed
    console.log(`Dropdown ${dropdownNumber}, Item clicked: ${item}`);
  };
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



       

        <div style={{ position: 'relative' }}>
              <p onClick={() => handleClick(1)} style={{ fontWeight: 'bold' }}>...</p> 
              {showDropdown1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    margin: '8px 0 0', // Adjust this value as needed
                    borderRadius: '4px',
                    background: '#FFF',
                    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                    width: '160px',
                    height: '100px',
                    flexShrink: 0,
                  }}
                  className="dropdown-content border border-dark p-2"
                >
                  <div onClick={() => handleItemClick(1, 1)}>Edit</div>
                  <div className='my-1' onClick={() => handleItemClick(2, 1)}>Report</div>
                  <div onClick={() => handleItemClick(3, 1)}>Option 3</div>
                </div>
              )}
            </div>

          
          </div>
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
     Sarthak Kamra
              </h6>
           </div>
           
           <div className='d-flex justify-content-between align-items-center gap-5'>
         <div className=' d-flex align-items-center gap-2 '>
         <IoEyeOutline className='fs-5'/>
           <h6 className='mt-1'>1.4k views</h6>
         </div> 
         <div className='rounded-2 d-flex align-items-center justify-content-center' style={{width: '29px',
height: '27px',backgroundColor:"#EDEEF0"}}> <IoShareSocial className='fs-5 ' /></div>
          
           </div>
         </div>
       </Card.Body>
    </Card>

{/*---------------card 2------------ */}

<Card className="w-100 w-md-50 my-3" style={{ maxWidth: "600px" }}>
      <Card.Img variant="top" src={post2} />
      <Card.Body>
      <Card.Title>🔬️ Education</Card.Title>
      <div className='d-flex justify-content-between align-items-center'>
        <Card.Title style={{width:"500px"}}>Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
        <div style={{ position: 'relative' }}>
              <p onClick={() => handleClick(2)} style={{ fontWeight: 'bold' }}>...</p> 
              {showDropdown2 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    margin: '8px 0 0', // Adjust this value as needed
                    borderRadius: '4px',
                    background: '#FFF',
                    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                    width: '160px',
                    height: '100px',
                    flexShrink: 0,
                  }}
                  className="dropdown-content border border-dark p-2"
                >
                  <div onClick={() => handleItemClick(1, 2)}>Edit</div>
                  <div className='my-1' onClick={() => handleItemClick(2, 2)}>Report</div>
                  <div onClick={() => handleItemClick(3, 2)}>Option 3</div>
                </div>
              )}
            </div>
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
         <div className='rounded-2 d-flex align-items-center justify-content-center' style={{width: '29px',
height: '27px',backgroundColor:"#EDEEF0"}}> <IoShareSocial className='fs-5 ' /></div>
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
        <div style={{ position: 'relative' }}>
              <p onClick={() => handleClick(3)} style={{ fontWeight: 'bold' }}>...</p> 
              {showDropdown3 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    margin: '8px 0 0', // Adjust this value as needed
                    borderRadius: '4px',
                    background: '#FFF',
                    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                    width: '160px',
                    height: '100px',
                    flexShrink: 0,
                  }}
                  className="dropdown-content border border-dark p-2"
                >
                  <div onClick={() => handleItemClick(1, 3)}>Edit</div>
                  <div className='my-1' onClick={() => handleItemClick(2, 3)}>Report</div>
                  <div onClick={() => handleItemClick(3, 3)}>Option 3</div>
                </div>
              )}
            </div>
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
         <div className='rounded-2 d-flex align-items-center justify-content-center' style={{width: '29px',
height: '27px',backgroundColor:"#EDEEF0"}}> <IoShareSocial className='fs-5 ' /></div>           </div>
         </div>
       </Card.Body>
    </Card>

      </Container>

        </div>

        </div>
    );
};

export default Post;
