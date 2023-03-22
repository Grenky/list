import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState([]);
  const url = "https://reqres.in/api/users";

  useEffect(() => {
    axios.get(url).then(response => {
      setUser(response.data.data)});
  }, [])

  return (
    <div className="App">
      <div className='list-box'>
      {user.map(user => <img src={user.avatar} alt={user.first_name} key={user.first_name}></img>)}
      <button className='send-btn'>send invite</button>    
      </div>
    </div>
  );
}

export default App;
