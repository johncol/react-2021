import { useMemo } from 'react';
import { ListItem } from './ListItem';

import './List.css';

export const List = ({ title, items, primary, done, onToggle }) => {
  const hasItems = items && items.length > 0;
  const itemsSortedByPriority = useMemo(() => sortByPriority(items), [items]);

  return (
    <section className={`list panel is-${primary ? 'primary' : 'info'}`}>
      <h2 className="panel-heading">{title}</h2>
      <div className="list-content">
        {hasItems ? (
          <ol>
            {itemsSortedByPriority.map((item) => (
              <ListItem
                key={item.id}
                value={item.description}
                done={done}
                onActionTrigger={() => onToggle(item)}
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
