import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as production from './production/reducer';
import thunk from 'redux-thunk';


const store = createStore(
  combineReducers({...production}),
  applyMiddleware(thunk)
);

export default store;