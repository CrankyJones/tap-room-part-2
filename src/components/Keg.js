import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
    const styleListItems = {
      backgroundColor: "Black",
      color: "white",    
      textAlign: 'left',
      marginRight: '80%',
      marginLeft: '6%',
      padding: '20px',
      borderRadius:'8px',
        }
    const styleQuarterLeft = {
      backgroundColor: "orange",
      color: "white",    
      textAlign: 'left',
      marginRight: '80%',
      marginLeft: '6%',
      padding: '20px',
      borderRadius:'8px',
        }
    const styleTenLeft = {
      backgroundColor: "red",
      color: "white",    
      textAlign: 'left',
      marginRight: '80%',
      marginLeft: '6%',
      padding: '20px',
      borderRadius:'8px',
        }
  return(
    <>
      <div onClick ={() => props.whenKegClicked(props.id)}>
      {props.quantity > 25 &&
        <div style = {styleListItems}>
          <h4>{props.name}</h4>
        </div>}
      {props.quantity < 25 && props.quantity > 11 &&
        <div style = {styleQuarterLeft}>
          <h4>{props.name}</h4>
      </div>}
      {props.quantity <= 10 &&
      <div style = {styleTenLeft}>
        <h4>{props.name}</h4>
      </div>}
      </div>
    <br></br>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  potency: PropTypes.string.isRequired,
  quantity:  PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;