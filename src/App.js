import React, { useMemo } from 'react';

const SimpleComponent = ({ count }) => {
  const computedValue = useMemo(() => {
    console.log('Computing Value');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Computed Value: {computedValue}</h2>
    </div>
  );
}

export default SimpleComponent;
