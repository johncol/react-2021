import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { CounterWithLazyState } from './CounterWithLazyState';

describe('CounterWithLazyState', () => {
  it('should display counter value and controls', () => {
    render(<CounterWithLazyState />);

    expect(screen.getByText(/Counter/)).toBeInTheDocument();
    expect(screen.getByText(/100000/)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('should update counter when controls are clicked', async () => {
    render(<CounterWithLazyState />);

    const increaseButton = screen.getAllByRole('button')[0];
    expect(increaseButton).toHaveTextContent('+');

    user.click(increaseButton);
    expect(await screen.findByText(/100001/)).toBeInTheDocument();
    expect(screen.queryByText(/100000/)).toBeNull();

    const decreaseButton = screen.getAllByRole('button')[1];
    expect(decreaseButton).toHaveTextContent('-');

    for (let times = 1; times <= 6; times++) {
      user.click(decreaseButton);
    }
    expect(await screen.findByText(/99995/)).toBeInTheDocument();
    expect(screen.queryByText(/100001/)).toBeNull();
  });
});
