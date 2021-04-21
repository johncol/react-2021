import { Link } from 'react-router-dom';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';

export const AlreaduLoggedVisitor = () => {
  const [loggedVisitor] = useLoggedVisitor();
  return (
    <div className="card">
      <div className="card-content">
        You have already identified yourself{' '}
        <span className="tag is-info">{loggedVisitor}</span>
        <br />
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </div>
  );
};
