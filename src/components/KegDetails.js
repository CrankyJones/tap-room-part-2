import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){
  const { keg, onServingPint, onSwappingKeg } = props;
  const styleKegInfo = {
    paddingLeft: '2%',
  }
  const styleListItems = {
    backgroundColor: "Black",
    color: "white",    
    textAlign: 'left',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingRight: '2%',
    paddingLeft: '2%',
    marginRight: '70%',
    marginLeft: '8%',
    borderRadius:'8px',
  }
  const styleQuarterLeft = {
    backgroundColor: "orange",
    color: "white",    
    textAlign: 'left',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingRight: '2%',
    paddingLeft: '2%',
    marginRight: '70%',
    marginLeft: '8%',
    borderRadius:'8px',
      }
  const styleTenLeft = {
    backgroundColor: "red",
    color: "white",    
    textAlign: 'left',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingRight: '2%',
    paddingLeft: '2%',
    marginRight: '70%',
    marginLeft: '8%',
    borderRadius:'8px',
      }
  
  return (
    <>
      <h2 style={styleKegInfo}>Keg Info</h2>

      {keg.quantity > 25 &&
        <div style = {styleListItems}>
          <h3>{keg.name}</h3>
        <p>Price per Pint: {keg.price}</p>
        <p>Alcohol Content {keg.potency}% ABV</p>
        <p>{keg.description}</p>
        <p>Current Pints Remaining: {keg.quantity}</p>
        <button className='button' onClick={()=> onServingPint(keg.id) }>Serve Pint</button>
        </div>}

        {keg.quantity <= 25 && keg.quantity > 10 &&
          <div style = {styleQuarterLeft}>
            <h3>{keg.name}</h3>
            <p>Price per Pint: {keg.price}</p>
            <p>Alcohol Content {keg.potency}% ABV</p>
            <p>{keg.description}</p>
            <p>Current Pints Remaining: {keg.quantity}</p>
            <button className='button' onClick={()=> onServingPint(keg.id) }>Serve Pint</button>
          </div>}

        {keg.quantity <= 10 &&
          <div style = {styleTenLeft}>
          <h3>{keg.name}</h3>
            <p>Price per Pint: {keg.price}</p>
            <p>Alcohol Content {keg.potency}% ABV</p>
            <p>{keg.description}</p>
            <p>Current Pints Remaining: {keg.quantity}</p>
            {keg.quantity > 0 &&
              <button className='button' onClick={()=> onServingPint(keg.id) }>Serve Pint</button>}
            {keg.quantity === 0 &&
              <h1>Keg is Cashed. Waiting for some fresh brew.</h1> &&
              <button className='kegButton' onClick={()=> onSwappingKeg(keg.id) }>Swap Keg</button>}
        </div>}
    </>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onServingPint: PropTypes.func,
  onSwappingKeg: PropTypes.func
};

export default KegDetails;

// <div style={styleListItems}>
// <h3>{keg.name}</h3>
// <p>Price per Pint: {keg.price}</p>
// <p>Alcohol Content {keg.potency}% ABV</p>
// <p>{keg.description}</p>
// <p>Current Pints Remaining: {keg.quantity}</p>
// {keg.quantity > 0 &&
//   <button className='button' onClick={()=> onServingPint(keg.id) }>Serve Pint</button>}
// {keg.quantity === 0 &&
//   <h1>Keg is Cashed. Waiting for some fresh brew.</h1> &&
//   <button className='kegButton' onClick={()=> onSwappingKeg(keg.id) }>Swap Keg</button>}