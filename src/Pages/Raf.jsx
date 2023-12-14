import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';

const Raf = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (item) => {
    // Handle the click on dropdown items as needed
    console.log(`Item clicked: ${item}`);
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>

      {showDropdown && (
        <div className="dropdown-content">
          <div onClick={() => handleItemClick(1)}>1</div>
          <div onClick={() => handleItemClick(2)}>2</div>
          <div onClick={() => handleItemClick(3)}>3</div>
        </div>
      )}
    </div>
  );
};

export default Raf;
