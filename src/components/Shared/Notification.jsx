export const Notification = ({ children, visible, danger }) => {
  if (!visible) {
    return null;
  }

  const modifier = danger ? 'is-danger' : '';

  return (
    <div
      className={`notification is-light ${modifier}`}
      style={{ padding: '1rem 1.5rem 1rem 1rem' }}
    >
      {children}
    </div>
  );
};
