import React, { useRef } from 'react';

function ExampleComponent() {
  const myRef = useRef('initial value');

  const updateValue = () => {
    myRef.current = 'new value';
    console.log('Updated value:', myRef.current);
  };

  return (
    <div>
      <p>Current value: {myRef.current}</p>
      <button onClick={updateValue}>Update Value</button>
    </div>
  );
}

export default ExampleComponent;
