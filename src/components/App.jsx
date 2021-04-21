import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard';
import { useLoggedVisitor } from '../hooks/useLoggedVisitor';

import './App.css';

export const App = () => {
  return (
    <div className="app content">
      <Router>
        <Route exact path="/" component={RedirectToProperComponent} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
};

const RedirectToProperComponent = () => {
  const [loggedVisitor] = useLoggedVisitor();
  if (!loggedVisitor) {
    return <Redirect to="/login" />;
  }

  return <Redirect to="/dashboard" />;
};
