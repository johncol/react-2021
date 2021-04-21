import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';

export const AlreaduLoggedVisitor = () => {
  const [loggedVisitor] = useLoggedVisitor();
  return (
    <div className="card">
      <div className="card-content">
        You've already identified yourself{' '}
        <span className="tag is-info">{loggedVisitor}</span>
      </div>
    </div>
  );
};
