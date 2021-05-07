import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { NewItemForm } from '../NewItemForm/NewItemForm';
import { Loading } from '../Shared/Loading';
import { Notification } from '../Shared/Notification';
import { List } from './../List';
import { ItemsGenerator } from './ItemsGenerator';
import { actions, selectors } from './slice';

export const Dashboard = () => {
  const [loggedVisitor] = useLoggedVisitor();
  const dispatch = useDispatch();
  const items = useSelector(selectors.all);

  useEffect(() => {
    if (loggedVisitor) {
      dispatch(actions.loadTechItems());
    }
  }, [loggedVisitor, dispatch]);

  if (!loggedVisitor) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Loading loading={items.loading} />
      <h1>Welcome {loggedVisitor}</h1>
      <NewItemForm />
      <ItemsGenerator visible={false} />
      <Notification visible={items.error} danger>
        Tech Items API: {items.error}
      </Notification>
      <List items={items.toTry} title="Things to try" primary />
      <List items={items.tried} title="Already tried" />
    </>
  );
};
