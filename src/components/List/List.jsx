import { useMemo } from 'react';
import './List.css';

export const List = ({ title, items, primary }) => {
  const hasItems = items && items.length > 0;
  const itemsSortedByPriority = useMemo(() => {
    return items.sort((item1, item2) => item1.priority - item2.priority);
  }, [items]);

  return (
    <section className={`list panel is-${primary ? 'primary' : 'info'}`}>
      <h2 className="panel-heading">{title}</h2>
      <div className="list-content">
        {hasItems ? (
          <ol>
            {itemsSortedByPriority.map((item) => (
              <li key={item.id}>{item.description}</li>
            ))}
          </ol>
        ) : (
          <>No items yet</>
        )}
      </div>
    </section>
  );
};
