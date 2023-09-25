import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <h2>
      <span className="titleBold">Data Structures & Algorithms FlashCards</span>
      <span className="titleRegular">: A Light Fresher on the DSA Needed for Technical Interviews</span>
    </h2>
  );
}

export default Header;