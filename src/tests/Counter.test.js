import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const addButton = screen.getByText('+');
  fireEvent.click(addButton);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const subtractButton = screen.getByText('-');
  fireEvent.click(subtractButton);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('-1');
})
