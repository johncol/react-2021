import { Redirect } from 'react-router';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { List } from './../List/List';
import state from '../../state.json';

export const Dashboard = () => {
  const [loggedVisitor] = useLoggedVisitor();
  if (!loggedVisitor) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h1>Welcome {loggedVisitor}</h1>
      <List items={state.to_try} title="Things to try" primary />
      <List items={state.tried} title="Tried" />
    </>
  );
};
