import React, { useState, useRef } from 'react';

const Watch = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current) return; // Nếu đang chạy thì không tạo mới
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{seconds} Giây</h2>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart} style={btnStyle}>Bắt đầu</button>
        <button onClick={handleStop} style={btnStyle}>Dừng</button>
        <button onClick={handleReset} style={btnStyle}>Reset</button>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Watch;
