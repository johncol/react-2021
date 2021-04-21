import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard';
import { CounterWithLazyState } from './PoCs/CounterWithLazyState';
import { useLoggedVisitor } from '../hooks/useLoggedVisitor';
import { UseContextSample } from './PoCs/UseContextSample';
import { CounterWithReducer } from './PoCs/CounterWithReducer';

import './App.css';

export const App = () => {
  return (
    <div className="app container content">
      <Router>
        <Route exact path="/" component={Redirecter} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lazy-state" component={CounterWithLazyState} />
        <Route path="/use-reducer" component={CounterWithReducer} />
        <Route path="/use-context" component={UseContextSample} />
      </Router>
    </div>
  );
};

const Redirecter = () => {
  const [loggedVisitor] = useLoggedVisitor();
  if (!loggedVisitor) {
    return <Redirect to="/login" />;
  }

  return <Redirect to="/dashboard" />;
};
