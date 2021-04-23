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
                            quantity: "124",
                            id: v4()});
  }
  return(
    <>
      <form className='form' onSubmit={handleNewKegFormSubmission}>
        <input className='input'
          type = 'text'
          name = 'name'
          placeholder = 'Keg Name'
          required />
        <input className='input'
          type = 'text'
          name = 'price'
          placeholder = 'Pint Cost'
          required />
        <input className='input'
          type = 'text'
          name = 'potency'
          placeholder = 'Alcohol %'
          required />
        <textarea className='input'
          name = 'description'
          placeholder = 'Description'
          required />
        <button className='button' type = 'submit'>Add New Keg</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;