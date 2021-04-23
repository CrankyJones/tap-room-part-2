import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value,
                            price: event.target.price.value,
                            description: event.target.description.value,
                            potency: event.target.potency.value,
                            quantity: 124,
                            id: v4()});
  }
  return(
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Keg Name' />
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Keg Pint Cost' />
        <textarea
          name = 'description'
          placeholder = 'Keg Description' />
        <input
          type = 'text'
          name = 'potency'
          placeholder = 'Keg Alcohol %' />
        <button type = 'submit'>Add New Keg</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;