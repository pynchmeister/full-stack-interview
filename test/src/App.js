import { useState } from "react"  
import logo from './logo.svg';
import './App.css';


function App() {
const [text1, setText1] = useState("")
const [text2, setText2] = useState("")
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Text field 1
          <textarea onChange={(e) => setText1(e.target.value)} value={text1}/>
          <br></br>
          Word count:{text1.split(" ").length-1}
          <br></br>
          <br></br>
          <br></br>
          Text field 2
          <textarea onChange={(e) => setText2(e.target.value)} value={text2}/>
          <br></br>
          Word count:{text2.split(" ").length-1}
          <br></br>
          <br></br>
          <p> These fields are: {(text1 == text2) ? "the same":"not the same"}</p>
      </header>
    </div>
  );
}

export default App;
