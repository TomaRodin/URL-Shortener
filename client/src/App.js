import { useRef, useState } from "react";
import './App.css';

function App() {
        const [newl, setNewl] = useState()
        const link = useRef()
        const newLink = useRef()
  function Add(){
    var data = "link="+link.current.value+"&newLink="+newLink.current.value+""

   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data
    };
    fetch('http://localhost:3001/add', requestOptions)
        .then(response => console.log(response))


    setNewl("Your New Link is:  http://localhost:3000/"+newLink.current.value)
  }

  return (
    <div>
      <h3>Paste Link</h3>
      <input type="text"  placeholder="Link:" ref={link} ></input>
      <h3>New Link</h3>
      <input type="text" placeholder="New Link:" ref={newLink} ></input>
      <br></br>
      <button onClick={Add}>Make Link</button>
      <div>{newl}</div>
    </div>
  );
}

export default App;
