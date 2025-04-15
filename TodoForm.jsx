import React, { useReducer, useEffect, useState } from 'react';

// Hàm reducer để quản lý các hành động
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = { id: Date.now(), text: action.text, completed: false };
      const updatedTodosAdd = [...state, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodosAdd)); // Lưu vào localStorage
      return updatedTodosAdd;

    case 'DELETE_TODO':
      const updatedTodosDelete = state.filter(todo => todo.id !== action.id);
      localStorage.setItem('todos', JSON.stringify(updatedTodosDelete)); 
      return updatedTodosDelete;

    case 'TOGGLE_TODO':
      const updatedTodosToggle = state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodosToggle)); 
      return updatedTodosToggle;

    case 'LOAD_TODOS':
      return action.todos;

    default:
      return state;
  }
};

function TodoForm() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch({ type: 'LOAD_TODOS', todos: storedTodos });
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', text: inputText });
      setInputText(''); 
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Nhập tên công việc..."
        />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
