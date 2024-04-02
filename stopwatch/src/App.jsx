import React, { useState, useEffect } from 'react';

const App = () => {
  const [millisec, setMillisec] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (millisec < 99) {
          setMillisec((prev) => prev + 1);
        } else if (second < 59) {
          setMillisec(0);
          setSecond((prev) => prev + 1);
        } else {
          setMillisec(0);
          setSecond(0);
          setMinute((prev) => prev + 1);
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning, millisec, second, minute]);

  const startWatch = () => {
    setIsRunning(true);
  };

  const pauseWatch = () => {
    setIsRunning(false);
  };
  const resettimer=()=>{
     setIsRunning(false)
     setMillisec(0)
     setSecond(0)
     setMinute(0)
  }

  return (
    <div className="container">
      <div className="box">
        <h2>
          {minute.toString().padStart(2, '0')} :{' '}
          {second.toString().padStart(2, '0')} :{' '}
          {millisec.toString().padStart(2, '0')}
        </h2>
        <div className="btns">
          <button onClick={resettimer}>Reset</button>
          <button onClick={pauseWatch}>Pause</button>
          <button onClick={startWatch}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default App;
