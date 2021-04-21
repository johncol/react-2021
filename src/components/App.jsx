import state from '../state.json';
import { List } from './List/List';
import './App.css';

export const App = () => {
  return (
    <div className="app content">
      <h1>Proof of Concept</h1>
      <List items={state.to_try} title="Things to try" primary />
      <List items={state.tried} title="Tried" />
    </div>
  );
};
