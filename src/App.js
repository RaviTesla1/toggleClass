import { useState } from 'react';
import './App.css'

function App() {
  const[toggle,setToggle] = useState(false)

  const toggleClass = () => {
    // toggle === false ?setToggle(true) :setToggle(false)
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <h1   className={toggle?"red":""}  onClick={toggleClass}>Lmao</h1>
    </div>
  );
}

export default App;
