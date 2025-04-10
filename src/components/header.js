// import React, { useState } from "react";
import styled from "styled-components";
import HeaderLinks from "./HeaderLinks";
// import { Link } from "react-router-dom";



const Header = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };
  return (
    <HeaderContainer>
      <Nav>
        <HeaderLinks/>
        {/* <Dropdown>
          <DropdownButton  onClick={toggleDropdown}>Menü</DropdownButton>
          {dropdownOpen && (
            <DropdownContent>
              <DropdownItem to="/">Home</DropdownItem>
              <DropdownItem to="/projekte">Projekte</DropdownItem>
              <DropdownItem to="/about">About Me</DropdownItem>
            </DropdownContent>
          )}
        </Dropdown> */}
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;



// const Dropdown = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const DropdownButton = styled.button`
//   background-color: #333;
//   color: white;
//   padding: 10px;
//   border: none;
//   cursor: pointer;
//   font-size: 1rem;
// `;

// const DropdownContent = styled.div`
//   display: block;
//   position: absolute;
//   background-color: white;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;
//   right: 0;
// `;

// const DropdownItem = styled(Link)`
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;

//   &:hover {
//     background-color: #ddd;
//   }
// `;

export default Header;