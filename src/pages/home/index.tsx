import React from 'react';
import { Link } from 'react-router-dom';

export const HomeIndex: React.FC = () => {
  return (
    <div className="content">
      <h2>Home</h2>
      <div>
        <p>This is a simple example showing how to use React Router:</p>
        <ul>
          <li>Home (this page)</li>
          <li>
            <Link to="/tasks">Tasks (/tasks)</Link>
          </li>
          <li>
            <Link to="/tasks/new">New Task (/tasks/new)</Link>
          </li>
          <li>Edit Task (/tasks/TASK_ID/edit)</li>
        </ul>
      </div>
    </div>
  );
};
