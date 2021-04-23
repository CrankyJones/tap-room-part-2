import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';

const Navbar = styled.div`
  padding: 5px 15px;
  height: 45px;
  background-color: rgb(89, 179, 239);
`
const StyledButton = styled(Button)`
  padding: 8px;
  margin-right: 5px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .2s;
  }
`
const StyledTitle = styled(Button)`
  margin-left: 35%;
  background-color: transparent;
  border-style: none;
  color: white;
  font-size: 30px;
  outline: none;
  &:hover {
    cursor: pointer;
    transition: .2s;
  }
`

const Header = () => (
  <Navbar>
    <StyledButton text={"Home"} />
    <StyledButton text={"Kegs"} />
    <StyledTitle text={"Available Kegs"} />
  </Navbar>
)

export default Header;