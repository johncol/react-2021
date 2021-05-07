import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ListItem } from './ListItem';
import { actions } from '../Dashboard/slice';

import './List.css';

export const List = ({ title, items, primary }) => {
  const hasItems = items && items.length > 0;
  const itemsSortedByPriority = useMemo(() => sortByPriority(items), [items]);
  const dispatch = useDispatch();

  const toggleIt = (item) => dispatch(actions.toggleItemTriedStatus(item));
  const deleteIt = (item) => dispatch(actions.deleteItem(item));

  return (
    <section className={`list panel is-${primary ? 'primary' : 'info'}`}>
      <h2 className="panel-heading">{title}</h2>
      <div className="list-content">
        {hasItems ? (
          <ol>
            {itemsSortedByPriority.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onToggle={toggleIt}
                onDelete={deleteIt}
              />
            ))}
          </ol>
        ) : (
          <>No items here</>
        )}
      </div>
    </section>
  );
};

const sortByPriority = (items) => {
  return [...items].sort(
    (item1, item2) =>
      (item1.priority ?? item1.id) - (item2.priority ?? item2.id)
  );
};
