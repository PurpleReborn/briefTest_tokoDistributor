import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './index';

export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return {store};
};
