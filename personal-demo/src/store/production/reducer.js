import * as production from './action-type';
import * as pro from './action-type';

let defaultState = {
  dataList: []
};

export const proData = (state = defaultState, action) => {
  switch (action.type) {
    case pro.GETLIST:
      return {...state, ...action};
    default:
      return state;
  }
};