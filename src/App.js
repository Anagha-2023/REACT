import React, { useState, useMemo } from 'react';

const SimpleComponent = () => {
  const [count, setCount] = useState(0);

  // Memoize the computed value
  const computedValue = useMemo(() => {
    console.log('Computing Value');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default SimpleComponent;
