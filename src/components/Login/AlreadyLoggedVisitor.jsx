import { Link } from 'react-router-dom';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';

export const AlreadyLoggedVisitor = () => {
  const [loggedVisitor] = useLoggedVisitor();
  return (
    <div className="card">
      <div className="card-content">
        <p>
          You have already identified yourself{' '}
          <span className="tag is-info">{loggedVisitor}</span>
        </p>
        <p>
          <Link to="/dashboard">Go to dashboard</Link>
        </p>
      </div>
    </div>
  );
};
