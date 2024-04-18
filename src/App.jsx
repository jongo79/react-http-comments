import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import IdCard from './IdCard';


function App() {
  const [usersData, setUsersData] = useState([]);

  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setUsersData(response.data);
      })
      .catch(error => {
        console.log('Error fetching users:', error);
      })
      .finally(() => {
        console.log('Request completed');
      });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>REACT HTTP COMMENTS</h1>
      </div>
      <div className="button-container">
        <button className='button-request' onClick={handleClick}>LAUNCH</button>
      </div>

      <div className="data-container">
        {usersData.map((id, index) => (
          <IdCard key={index} id={{ name: id.name, email: id.email, body: id.body }} />
        ))}
      </div>
    </div>
  );
}

export default App;
