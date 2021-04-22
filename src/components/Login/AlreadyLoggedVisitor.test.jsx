import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';

import { AlreadyLoggedVisitor } from './AlreadyLoggedVisitor';

const renderInsideRouter = (component) => {
  render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AlreadyLoggedVisitor', () => {
  it('should display message for logged visitor', () => {
    renderInsideRouter(<AlreadyLoggedVisitor />);

    expect(
      screen.getByText(/You have already identified yourself/)
    ).toBeInTheDocument();
  });

  it('should show a link to dashboard', () => {
    renderInsideRouter(<AlreadyLoggedVisitor />);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Go to dashboard');
  });

  xit('should display the visitor name', async () => {
    const LoggedVisitorUpdater = () => {
      const [, setVisitor] = useLoggedVisitor();
      useEffect(() => {
        setVisitor('Kathlin');
      }, [setVisitor]);
      return null;
    };

    renderInsideRouter(
      <>
        <LoggedVisitorUpdater />
        <AlreadyLoggedVisitor />
      </>
    );

    expect(await screen.findByText(/Kathlin/)).toBeInTheDocument();
  });
});
