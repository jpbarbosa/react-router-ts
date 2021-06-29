import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header';
import { TaskIndex } from './tasks';
import { HomeIndex } from './home';

export const App: React.FC = () => {
  return (
    <div>
      <Router basename={process.env.REACT_APP_BASENAME}>
        <Header />
        <Switch>
          <Route path="/tasks">
            <TaskIndex />
          </Route>
          <Route path="/">
            <HomeIndex />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
