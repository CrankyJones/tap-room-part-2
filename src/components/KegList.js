import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      {props.kegList.map((keg) =>
        <Product
          whenKegClicked = {props.onKegSelection}
          name = {keg.name}
          price = {keg.price}
          description = {keg.description}
          potency = {keg.potency}
          id = {keg.id}
          key = {keg.id} />
      )}
    </>  
  );
}

KegList.proptypes = {
  kegList: PropTypes.array,
  onKegSelection: Proptypes.func
}

export default KegList;