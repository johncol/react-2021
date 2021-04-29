import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { List } from './../List/List';
import { actions, selectors } from './slice';

export const Dashboard = () => {
  const [loggedVisitor] = useLoggedVisitor();
  const dispatch = useDispatch();
  const itemsToTry = useSelector(selectors.toTry);
  const itemsTried = useSelector(selectors.tried);

  if (!loggedVisitor) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Welcome {loggedVisitor}</h1>
      <List
        items={itemsToTry}
        title="Things to try"
        primary
        done={false}
        onToggle={(item) => dispatch(actions.markAsTried(item))}
      />
      <List
        items={itemsTried}
        title="Tried"
        done={true}
        onToggle={(item) => dispatch(actions.markAsToTry(item))}
      />
    </>
  );
};
