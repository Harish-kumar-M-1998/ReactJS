import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const handleAddUser = async () => {
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name,
        email,
      });
      setUsers([...users, response.data]);
      setName('');
      setEmail('');
      setLoading(false);
      setMessage('User added successfully!');
    } catch (error) {
      console.error("Error adding user:", error);
      setLoading(false);
    }
  };
  const handleEditUser = (user) => {
    setEditingUser(user); // Set the editing user state to the user to be edited
    setName(user.name); // Update the name in the form
    setEmail(user.email); // Update the email in the form
  };


  const handleUpdateUser = async () => {
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, {
        name,
        email,
      });
      const updatedUsers = users.map((user) => user.id === editingUser.id ? { ...user, name, email } : user);
      setUsers(updatedUsers);
      setEditingUser(null);
      setName('');
      setEmail('');
      setLoading(false);
      setMessage('User updated successfully!');
    } catch (error) {
      console.error("Error updating user:", error);
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
      setLoading(false);
      setMessage('User deleted successfully!');
    } catch (error) {
      console.error("Error deleting user:", error);
      setLoading(false);
    }
  };

  // Display loading message
  if (loading) return <div className='loading'> <p className='spinner'></p></div>;

  // Display alert message
  if (message) {
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    alert(message);
  }

  return (
    <div>
      <h1> Axios Management</h1>
      <div className='input-group'>{editingUser ? (
        <div className='input' >
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <button className="button" onClick={handleUpdateUser}>Update User</button>
        </div>
      ) : (
        <div className='input'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <button className="button" onClick={editingUser ? handleUpdateUser : handleAddUser}>
            {editingUser ? "Update User" : "Add User"}
          </button>

        </div>
      )}</div>

      <ul>
        {users.map((user) => (
         <div className='user-list'>
          <li key={user.id}>
          {user.name} - {user.email}
            <div className='user-actions'>
           
            <button className="" onClick={() => handleEditUser(user)}> <FontAwesomeIcon icon={faEdit} /> </button>
             <button className="" onClick={() => handleDeleteUser(user.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;