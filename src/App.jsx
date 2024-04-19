import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import IdCard from './IdCard';
import Spinner from './Spinner';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response)  {

        setUsersData(response.data);

      })
      .catch(error => {
        console.log('Error fetching users:', error);
      })
      .finally(() => {
        console.log('Request completed');
        setIsLoading(false);

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
        {isLoading ? (
         <Spinner />
        ) : (
          usersData.map((id, index) => (
            <IdCard key={index} id={{ name: id.name, email: id.email, body: id.body }} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
