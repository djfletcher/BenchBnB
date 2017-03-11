import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
  session: {
    currentUser: null,
    errors: []
  }
};
