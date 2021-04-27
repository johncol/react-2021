import { Redirect } from 'react-router';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { List } from './../List/List';
import { useJsonLocalState } from '../../hooks/useJsonLocalState';

export const Dashboard = () => {
  const [loggedVisitor] = useLoggedVisitor();
  const [state, setState] = useJsonLocalState();
  if (!loggedVisitor) {
    return <Redirect to="/" />;
  }

  const toggle = (item, setDone) => {
    const source = setDone ? 'to_try' : 'tried';
    const target = setDone ? 'tried' : 'to_try';
    setState((items) => ({
      [source]: items[source].filter((i) => i.id !== item.id),
      [target]: items[target].concat(item),
    }));
  };

  return (
    <>
      <h1>Welcome {loggedVisitor}</h1>
      <List
        items={state.to_try}
        title="Things to try"
        primary
        done={false}
        onToggle={(item) => toggle(item, true)}
      />
      <List
        items={state.tried}
        title="Tried"
        done={true}
        onToggle={(item) => toggle(item, false)}
      />
    </>
  );
};
