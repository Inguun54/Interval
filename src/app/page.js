"use client";

import React, { useEffect, useState } from 'react';

const Interval = () => {
  const [time, setTime] = useState(60);

  const minusAlarm = () => {
    setTime((prev) => (prev > 0 ? prev - 1 : 0)); 
  };

  const addMinute = () => {
    setTime((prev) => prev + 60);
  };

  const hisah= () => {
    setTime((prev) => (prev >= 10 ? prev - 10 : 0));
  };

  const sec = time % 60;
  const minutes = Math.floor(time / 60);
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const interval = setInterval(minusAlarm, 1000);
    return () => clearInterval(interval);
  }, []);  

  return (
    <div className="interval-container">
      <div className="time-display">
        Minute: {formatTime(minutes)} Sec: {formatTime(sec)}
      </div>
      <button className="control-button" onClick={addMinute}>Add a Minute</button>
      <button className="control-button" onClick={hisah}>Subtract 10 Sec</button>
    </div>
  );
};

export default Interval;
