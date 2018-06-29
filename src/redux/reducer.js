import { combineReducers } from 'redux';
import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';
import doctors from './reducers/doctors'
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  articles,
  doctors,
  authUser,
  common,
  router: routerReducer
});