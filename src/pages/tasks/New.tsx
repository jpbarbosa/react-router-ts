import React from 'react';
import { Link } from 'react-router-dom';

export const TaskNew: React.FC = () => {
  return (
    <div className="content">
      <Link className="bt bt-back" to="/tasks">
        Back
      </Link>
      <h2>New</h2>
    </div>
  );
};
