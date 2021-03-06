import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BenchesIndexContainer from './benches/benches_index_container';
import SearchContainer from './benches/search_container';


const _redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/');
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ SearchContainer } />
        <Route
          path="/login"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }
        />
        <Route
          path="/signup"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn }
        />
      </Route>
    </Router>
  </Provider>
);

export default Root;
