import * as c from './../actions/ActionTypes';

export const addKeg = (keg) => {
  const { name, price, description, potency, quantity, id } = keg;
  return { 
    type: c.ADD_KEG,
    name: name,
    price: price,
    description: description,
    potency: potency,
    quantity: quantity,
    id: id
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


