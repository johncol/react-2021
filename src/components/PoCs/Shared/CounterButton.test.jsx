import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { CounterButton } from './CounterButton';

describe('CounterButton', () => {
  it('should render a clickeable button', () => {
    const onClick = jest.fn();
    render(<CounterButton onClick={onClick} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
