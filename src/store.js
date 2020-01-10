// Redux Store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const APPLICATION_DEFAULT_STATE = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
  rootReducer,
  APPLICATION_DEFAULT_STATE,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
