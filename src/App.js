import React, { useState } from 'react';
import './App.css';
import Input from './components/atoms/input'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>Testing - {inputValue}</h1>
      <Input label="enter your age" handleChange={handleInputChange} />
    </div>
  );
}

export default App;
