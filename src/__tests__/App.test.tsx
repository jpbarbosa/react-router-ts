import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo';
import { App } from '../pages/App';

test('renders learn react link', () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const linkElement = screen.getByText(/React Router CRUD/i);
  expect(linkElement).toBeInTheDocument();
});
