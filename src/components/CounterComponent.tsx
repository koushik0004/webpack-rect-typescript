import { useState } from 'react';

export const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
  );
};
