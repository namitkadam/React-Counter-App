import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);
  function addVal() {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    }
  }
  function removeVal() {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  }
  return (
    <>
      <div className="container">
        <h1>
          counter value:
          {counter}
        </h1>
        <div className="btn">
          <button onClick={addVal}>Add value</button>
          <button onClick={removeVal}>Remove value</button>
        </div>
      </div>
    </>
  );
}

export default App;
