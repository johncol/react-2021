export const ListItem = ({ value, done, onActionTrigger }) => {
  return (
    <li className="card">
      <div className="card-content">
        <div className="content">{value}</div>
      </div>
      <footer className="card-footer">
        <a
          href="#"
          className="card-footer-item"
          onClick={(event) => {
            event.preventDefault();
            onActionTrigger(value);
          }}
        >
          {done ? 'Undo' : 'Done'}
        </a>
      </footer>
    </li>
  );
};
