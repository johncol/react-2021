import { useState } from 'react';
import { CounterButton } from './Shared/CounterButton';
import { DisplayCounter } from './Shared/DisplayCounter';

const someExpensiveCalculation = (limit) => {
  let counter = 0;
  while (counter < limit) {
    counter++;
  }
  return counter;
};

export const CounterWithLazyState = () => {
  const [counter, setCounter] = useState(() => {
    const initialValue = someExpensiveCalculation(100000);
    return initialValue;
  });
  const updateCounter = (step) => setCounter((counter) => counter + step);

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns is-mobile">
          <div className="column is-half">
            <DisplayCounter value={counter} />
          </div>
          <div className="column">
            <CounterButton onClick={() => updateCounter(1)}>+</CounterButton>
          </div>
          <div className="column">
            <CounterButton onClick={() => updateCounter(-1)}>-</CounterButton>
          </div>
        </div>
      </div>
    </div>
  );
};
