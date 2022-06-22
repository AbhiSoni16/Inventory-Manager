import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<ManageInventory />);
  const linkElement = screen.getByText(/Add Inventory/i);
  expect(linkElement).toBeInTheDocument();
});
