import React, { useState } from 'react';


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });
  const [filterStatus, setFilterStatus] = useState('All');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value
    });
  };

  const addTodo = () => {
    setTodos([...todos, { ...newTodo }]);
    setNewTodo({ name: '', description: '', status: 'Not Completed' });
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const updateStatus = (index, newStatus) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filterStatus === 'All') {
      return true;
    } else if (filterStatus === 'Completed') {
      return todo.status === 'Completed';
    } else {
      return todo.status === 'Not Completed';
    }
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          value={newTodo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>

      <div className="todo-list">
        {filteredTodos.map((todo, index) => (
          <div key={index} className={`todo-card ${todo.status}`}>
            <h3>{todo.name}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => updateStatus(index, todo.status === 'Completed' ? 'Not Completed' : 'Completed')}>
              Change Status
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
