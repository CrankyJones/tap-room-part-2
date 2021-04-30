import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, price, description, potency, quantity, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          description: description,
          potency: potency,
          quantity: quantity,
          id: id
        }
      });
    case c.RESTOCK:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          description: description,
          potency: potency,
          quantity: quantity,
          id: id
        }
      });
    case c.SERVE_PINT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          description: description,
          potency: potency,
          quantity: quantity,
          id: id
        }
      });

    // case c.SELECT_KEG:
    // return Object.assign({}, state, {
    //   [id]: {
    //     name: name,
    //     price: price,
    //     description: description,
    //     potency: potency,
    //     quantity: quantity,
    //     id: id
    //   }
    // });

    default:
      return state;
  }
};