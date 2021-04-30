import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.RESET_SELECTED_KEG:
      return state = null;
    default:
      return state;
  }
};