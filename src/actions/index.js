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

export const restock = (keg) => {
  const { name, price, description, potency, quantity, id } = keg;
  return { 
    type: c.RESTOCK,
    name: name,
    price: price,
    description: description,
    potency: potency,
    quantity: 124,
    id: id
  }
}

export const servePint = (keg) => {
  const { name, price, description, potency, quantity, id } = keg;
  return { 
    type: c.SERVE_PINT,
    name: name,
    price: price,
    description: description,
    potency: potency,
    quantity: quantity - 1,
    id: id
  }
}

// export const selectKeg = (keg) => {
//   const { name, price, description, potency, quantity, id } = keg;
//   return { 
//     type: c.SELECT_KEG,
//     name: name,
//     price: price,
//     description: description,
//     potency: potency,
//     quantity: quantity,
//     id: id
//   }
// }