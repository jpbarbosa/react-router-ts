import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

interface IRouteMatch {
  page: string;
}

export const Header: React.FC = () => {
  const match = useRouteMatch<IRouteMatch>('/:page');

  const pageButton = (label: string, to: string) => {
    const currentPage = match?.params?.page || '';
    const className = to === `/${currentPage}` ? 'bt bt-active' : 'bt';
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <header>
      <h1>
        <div className="title">React Router CRUD</div>
        <div className="subtitle">With GraphQL And TypeScript</div>
      </h1>
      <div className="navigation">
        {pageButton('Home', '/')}
        {pageButton('Tasks', '/tasks')}
      </div>
    </header>
  );
};
