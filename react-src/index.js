import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'

const Header   = require('./components/header'),
      GetAll   = require('./components/getall'),
      Get      = require('./components/get'),
      NotFound = require('./components/404')
      ;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={GetAll}></IndexRoute>
      <Route path="get" component={Get}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>,
  document.getElementById('content')
)