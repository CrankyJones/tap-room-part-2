import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){
  const { keg, onServingPint, onSwappingKeg } = props;
  return (
    <>
      <h2>Keg Info</h2>
      <h3>{keg.name}</h3>
      <p>Price per Pint: {keg.price}</p>
      <p>{keg.description}</p>
      <p>Current Pints Remaining: {keg.quantity}</p>
      {keg.quantity > 0 &&
        <button onClick={()=> onServingPint(keg.id) }>Serve Pint</button>}
      {keg.quantity === 0 &&
        <h1>Keg is Cashed. Waiting for some fresh brew.</h1> &&
        <button onClick={()=> onSwappingKeg(keg.id) }>Swap Keg</button>}

    </>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onServingPint: PropTypes.func,
  onSwappingKeg: PropTypes.func
};

export default KegDetails;