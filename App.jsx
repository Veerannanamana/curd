import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  
  const addNewNumber = () => {
    Axios.post('http://localhost:8000/add-phone', { name, phone });
  };

  return (
    <div class="c">
      <div class="form">
      <label htmlFor="b">Name: </label>
      <input type="text" onChange={(e) => setName(e.target.value)} /><br/><br/>
      <label htmlFor="c">Phone: </label>
      <input type="number" onChange={(e) => setPhone(e.target.value)} /><br/><br/>

      <button onClick={addNewNumber}>Add New Number</button>
    </div>
    </div>
  );

    }
export default App;
