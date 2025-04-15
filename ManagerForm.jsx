import React, { useReducer } from 'react';

// 1. Khởi tạo state ban đầu
const initialState = {
    name: '',
    email: ''
};

// 2. Tạo reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const ManagerForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dữ liệu người dùng:');
        console.log(`Họ tên: ${state.name}`);
        console.log(`Email: ${state.email}`);
    };

    return (
        <div style={containerStyle}>
            
            <form onSubmit={handleSubmit}>
                <div style={formGroup}>
                    <label>Họ tên:</label> <br />
                    <input
                        type="text"
                        value={state.name}
                        onChange={(e) =>
                            dispatch({ type: 'SET_NAME', payload: e.target.value })
                        }
                        placeholder="Nhập họ tên"
                    />
                </div>
                <div style={formGroup}>
                    <label>Email:</label> <br />
                    <input
                        type="email"
                        value={state.email}
                        onChange={(e) =>
                            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                        }
                        placeholder="Nhập email"
                    />
                </div>
                <button type="submit" style={btnStyle}>Gửi</button>
            </form>
        </div>
    );
};


const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
};

const formGroup = {
    marginBottom: '15px'
};

const btnStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
};

export default ManagerForm;
