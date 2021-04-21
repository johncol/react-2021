import { useEffect, useReducer, useRef } from 'react';
import { CounterButton } from './Shared/CounterButton';
import { DisplayCounter } from './Shared/DisplayCounter';

const reducer = (counter, action) => {
  switch (action.type) {
    case 'increment':
      return { ...counter, value: counter.value + 1 };
    case 'decrement':
      return { ...counter, value: counter.value - 1 };
    default:
      throw new Error('Unexpected action type: ' + action.type);
  }
};

const initialValue = { value: 10 };

export const CounterWithReducer = () => {
  const [counter, dispatch] = useReducer(reducer, initialValue);

  const rendersCounter = useRef({ value: 0 });
  useEffect(() => {
    rendersCounter.current.value++;
    console.log('Renders count:', JSON.stringify(rendersCounter.current));
  });

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns is-mobile">
          <div className="column is-half">
            <DisplayCounter value={counter.value} />
          </div>
          <div className="column">
            <CounterButton onClick={() => dispatch({ type: 'increment' })}>
              +
            </CounterButton>
          </div>
          <div className="column">
            <CounterButton onClick={() => dispatch({ type: 'decrement' })}>
              -
            </CounterButton>
          </div>
        </div>
      </div>
    </div>
  );
};
