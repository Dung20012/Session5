import React, { useState, useEffect } from 'react';

const LoggerCounter = () => {
    const [count, setCount] = useState(0);

   
    useEffect(() => {
        console.log('Component đã được tạo!');
    }, []);

    
    useEffect(() => {
        console.log(`Giá trị count mới là: ${count}`);
    }, [count]);

    const handleIncrease = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Count: {count}</h2>
            <button
                onClick={handleIncrease}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Tăng
            </button>
        </div>
    );
};

export default LoggerCounter;
