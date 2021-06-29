import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TaskNew } from './New';
import { TaskEdit } from './Edit';
import { TaskList } from './List';

export const TaskIndex: React.FC = () => {
  return (
    <div className="page">
      <Switch>
        <Route path="/tasks/new">
          <TaskNew />
        </Route>
        <Route path="/tasks/:id/edit">
          <TaskEdit />
        </Route>
        <Route path="/tasks">
          <TaskList />
        </Route>
      </Switch>
    </div>
  );
};
