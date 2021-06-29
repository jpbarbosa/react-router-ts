import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header>
      <h1>
        <div className="title">React Router CRUD</div>
        <div className="subtitle">With GraphQL And TypeScript</div>
      </h1>
      <div className="navigation">
        <Link to="/" className="bt">
          Home
        </Link>
        <Link to="tasks" className="bt">
          Tasks
        </Link>
      </div>
    </header>
  );
};
