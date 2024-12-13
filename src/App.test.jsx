// src/App.test.jsx

import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the correct header text', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();  // Match the actual text
  });

  it('should render the correct button text', () => {
    render(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();  // Match the button text
  });

  it('should render the correct paragraph text', () => {
    render(<App />);
    expect(screen.getByText(/Edit.*save to test HMR/i)).toBeInTheDocument();  // Match text even if split
  });
});
