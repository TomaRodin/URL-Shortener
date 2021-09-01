import { useRef, useState } from "react";
import './App.css';

function App() {
        const link = useRef()
        const newLink = useRef()
  function Add(){
    var data = {
      link: "link",
      newlink: "newLink"
    };
    const requestOptions = {
      mode: "no-cors",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://localhost:3001/add', requestOptions)
        .then(response => console.log(response))

    
  }

  return (
    <div>
      <h3>Paste Link</h3>
      <input type="text"  placeholder="Link:" ref={link} ></input>
      <h3>New Link</h3>
      <input type="text" placeholder="New Link:" ref={newLink} ></input>
      <br></br>
      <button onClick={Add}>Make Link</button>
    </div>
  );
}

export default App;
