import React, { useState } from 'react';
import { useLoggedVisitor } from '../../hooks/useLoggedVisitor';
import { AlreaduLoggedVisitor } from './AlreadyLoggedVisitor';

export const Login = () => {
  const [visitor, setVisitor] = useState('');
  const [loggedVisitor, setLoggedVisitor] = useLoggedVisitor();
  const validName = visitor.trim().length >= 4;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedVisitor(visitor);
  };

  if (loggedVisitor) {
    return <AlreaduLoggedVisitor />;
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
