import { useState } from 'react';

const someExpensiveCalculation = (limit) => {
  let counter = 0;
  while (counter < limit) {
    counter++;
  }
  return counter;
};

export const LazyState = () => {
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

const DisplayCounter = ({ value }) => {
  return (
    <>
      Counter: <span className="tag is-info">{value}</span>
    </>
  );
};

const CounterButton = ({ children, onClick }) => {
  return (
    <button className="button is-link is-light" onClick={onClick}>
      {children}
    </button>
  );
};
