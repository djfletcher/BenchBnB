import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
import * as BenchAPIUtil from './util/bench_api_util';
import { fetchBenches, receiveBenches } from './actions/bench_actions';


window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchBenches = fetchBenches;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = { session: { currentUser: window.currentUser } };
  const store = window.currentUser ? configureStore(preloadedState) : configureStore();
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
