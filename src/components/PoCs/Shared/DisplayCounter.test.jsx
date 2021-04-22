import { render, screen } from '@testing-library/react';

import { DisplayCounter } from './DisplayCounter';

describe('DisplayCounter', () => {
  it('should display the counter value', () => {
    render(<DisplayCounter value={10} />);

    expect(screen.getByText(/Counter/)).toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
  });
});
