import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Student from './student'

function App() {
	const [name,setName] = useState('Arun');
  return (
    <div className="App">
      <h1>React Props Example</h1>
      <Student name={name} email={'arun@gmail.com'} />
      <button onClick={()=>{setName('Tarun')}}>Click Me</button>
    </div>
  );	
}

export default App;
