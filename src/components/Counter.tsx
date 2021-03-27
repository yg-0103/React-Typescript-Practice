import React from 'react';

type CounterProps = {
  count: number;
  onIcrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({ count, onIcrease, onDecrease, onIncreaseBy }: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIcrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
      <button onClick={() => onIncreaseBy(5)}> +5 </button>
    </div>
  );
}

export default Counter;
