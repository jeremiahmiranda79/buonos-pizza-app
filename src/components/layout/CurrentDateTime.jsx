import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p 
        className='x'>
          <hr />
          Current Date: {now.toLocaleDateString()} 
          <br /> 
          Current Time: {now.toLocaleTimeString()}
          <hr />
      </p>
    </div>
  );
}

export default CurrentDateTime;