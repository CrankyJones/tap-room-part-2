import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <div className='wrapper'>
        {props.kegList.map((keg) =>
          <div>
            <Keg
              whenKegClicked = {props.onKegSelection}
              name = {keg.name}
              price = {keg.price}
              description = {keg.description}
              potency = {keg.potency}
              quantity = {keg.quantity}
              id = {keg.id}
              key = {keg.id} />
          </div>
        )}
      </div>
    </>  
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;