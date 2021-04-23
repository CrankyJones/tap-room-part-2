import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
    const styleListItems = {
      backgroundColor: "Black",
      color: "white",    
      textAlign: 'left',
      marginRight: '85%',
      marginLeft: '6%',
      padding: '20px',
        }
  return(
    <>
    <div style = {styleListItems}>
    <div onClick ={() => props.whenKegClicked(props.id)}>
      <h4 className='col-md-6'>{props.name}</h4>
      {/* <p>{props.price}</p>
      <p>{props.description}</p>
      <p>{props.potency}</p>
      <p>Pints Remaining: {props.quantity}</p> */}
    </div>
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