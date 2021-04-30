import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({   
    name: 'Big Beer',
    price: '7',
    description: 'A big beer!',
    potency: '5.6',
    quantity: 124,
    id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Big Beer',
      price: '7',
      description: 'A big beer!',
      potency: '5.6',
      quantity: 124,
      id: 1
    })
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});