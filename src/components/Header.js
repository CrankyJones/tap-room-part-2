import React from "react";







function Header(){
  const styleTitleObject = {
    backgroundColor: "Black",
    color: "white",    
    textAlign: 'center',
    padding: '20px',
  }
  return (
    <>
      <h1 style={styleTitleObject}>Brew-Ha House</h1>
      <h4>Check out our current on-tap beverages! </h4>
    </>
  );
}



export default Header;