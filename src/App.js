import Counter from "./components/Counter";
import {useState} from "react";
function App() {
  const [isVisible,setIsVisible]=useState(true);

  return (
    //isVisible true ise Counter componentini göster
    <div className="App">
      {isVisible && <Counter/>} 
    <button onClick={()=>{setIsVisible(!isVisible)}}>Sayaç kaldır</button>
    </div>
  );
}

export default App;
