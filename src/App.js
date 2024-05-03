import React, { useState, useEffect } from 'react';

function LoadingExample() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData({ message: "Hello, world!" });
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data Loaded Successfully</h1>
          <p>{data.message}</p>
        </div>
      )}
    </div>
  );
}

export default LoadingExample;