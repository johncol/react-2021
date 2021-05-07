import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { AlreadyLoggedVisitor } from './AlreadyLoggedVisitor';

export const Login = () => {
  const history = useHistory();
  const [loggedVisitor, setLoggedVisitor] = useLoggedVisitor();
  const [visitor, setVisitor] = useState('');
  const validName = visitor.trim().length >= 4;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedVisitor(visitor);
    history.push('/dashboard');
  };

  if (loggedVisitor) {
    return <AlreadyLoggedVisitor />;
  }

  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Visitor</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Visitor name"
                value={visitor}
                onChange={(event) => setVisitor(event.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success" disabled={!validName}>
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
