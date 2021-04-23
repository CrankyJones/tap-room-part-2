import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <>
    <div onClick ={() => props.whenKegClicked(props.id)}>
      <h4>{props.name}</h4>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <p>{props.potency}</p>
      <p>Pints Remaining: {props.quantity}</p>
    </div>
    <hr/>
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