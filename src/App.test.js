import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GistList component', () => {
  render(<App />);
  const gistListElement = screen.getByTestId('gist-list');
  expect(gistListElement).toBeInTheDocument();
});
