import React from 'react';
import { Link } from 'react-router-dom';

export const TaskList: React.FC = () => {
  return (
    <div>
      <div className="content">
        <Link to="/tasks/new" className="bt bt-new">
          New
        </Link>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/tasks/1/edit">Task 1</Link>
          </li>
          <li>
            <Link to="/tasks/2/edit">Task 2</Link>
          </li>
          <li>
            <Link to="/tasks/3/edit">Task 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
