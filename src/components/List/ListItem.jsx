export const ListItem = ({ item, onToggle, onDelete }) => {
  const toggleAction = item.tried ? 'Undo' : 'Done';

  return (
    <li className="card list-item">
      <div className="card-content">
        <div className="content">{item.description}</div>
      </div>
      <footer className="card-footer">
        <Action onClick={() => onToggle(item)}>{toggleAction}</Action>
        <Action onClick={() => onDelete(item)}>&times;</Action>
      </footer>
    </li>
  );
};

const Action = ({ children, onClick }) => {
  const trigger = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <a
      href="#"
      className="card-footer-item"
      onClick={(event) => trigger(event)}
    >
      {children}
    </a>
  );
};
