import './List.css';

export const List = ({ title, items, primary }) => {
  const hasItems = items && items.length > 0;
  return (
    <section className={`list panel is-${primary ? 'primary' : 'info'}`}>
      <h2 className="panel-heading">{title}</h2>
      <div className="list-content">
        {hasItems ? (
          <ol>
            {items.map((item) => (
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
