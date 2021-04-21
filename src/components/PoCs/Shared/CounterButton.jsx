export const CounterButton = ({ children, onClick }) => {
  return (
    <button className="button is-link is-light" onClick={onClick}>
      {children}
    </button>
  );
};
