import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () => {

  let action;
  // const currentState = {
  //   1: {
  //     name: 'Big Beer',
  //     price: '7',
  //     description: 'A big beer!',
  //     potency: '5.6',
  //     quantity: 124,
  //     id: 1
  //   },
  //   2: {
  //   name: 'Small Beer',
  //   price: '2',
  //   description: 'A small beer!',
  //   potency: '2.5',
  //   quantity: 124,
  //   id: 2
  //   }
  // };
  const kegData = {
    name: 'Big Beer',
    price: '7',
    description: 'A big beer!',
    potency: '5.6',
    quantity: 124,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add a keg to the keg list', () => {
    const { name, price, description, potency, quantity, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      price: price,
      description: description,
      potency: potency,
      quantity: quantity,
      id: id,
    };
  
  expect(kegListReducer({}, action)).toEqual({
    [id] : {
      name: name,
      price: price,
      description: description,
      potency: potency,
      quantity: quantity,
      id: id
    }
  });
});


});