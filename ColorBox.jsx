import React, { useState } from 'react';

const ColorBox = () => {
  const colorList = ['green', 'pink', 'white'];
  const [bgColor, setBgColor] = useState('gray');

  const handleChangeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    setBgColor(colorList[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: bgColor,
          margin: '0 auto',
          border: '2px solid #000',
          borderRadius: '10px'
        }}
      ></div>

      <button
        onClick={handleChangeColor}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Đổi màu
      </button>
    </div>
  );
};

export default ColorBox;
