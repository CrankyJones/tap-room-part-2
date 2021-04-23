import React from "react";

function Header(){
  const styleTitleObject = {
    backgroundColor: "Black",
    color: "white",    
    textAlign: 'center',
    paddingBottom: '1%',
    paddingTop: '1%'

  }
  return (
    <>
      <div style={styleTitleObject}>
        <h1>Brew-Ha House</h1>
        <h4>Check out our current on-tap beverages! </h4>
      </div>
    </>
  );
}

export default Header;