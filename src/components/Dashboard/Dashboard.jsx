import { Redirect } from 'react-router';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { List } from './../List/List';
import { useJsonLocalState } from '../../hooks/useJsonLocalState';

export const Dashboard = () => {
  const [loggedVisitor] = useLoggedVisitor();
  const [state] = useJsonLocalState();
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
