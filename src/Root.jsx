import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoPage from "./pages/Todo.jsx";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <TodoPage/>
      </Route>
    </Switch>
  </Router>
);

export default Root;
