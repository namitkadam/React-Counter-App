// import { useState } from "react";
// import "./App.css";
// function App() {
//   let [counter, setCounter] = useState(0);
//   function addVal() {
//     if (counter < 20) {
//       setCounter(counter + 1);
//       console.log(counter);
//     }
//   }
//   function removeVal() {
//     if (counter > 0) {
//       setCounter(counter - 1);
//       console.log(counter);
//     }
//   }
//   return (
//     <>
//       <div className="container">
//         <h1>
//           counter value:
//           {counter}
//         </h1>
//         <div className="btn">
//           <button onClick={addVal}>Add value</button>
//           <button onClick={removeVal}>Remove value</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

//--------------------------------------------------------------//

// import logo from "./logo.svg";
// import "./App.css";
// import Carousel from "./Components/Carousel";

// function App() {
//   return (
//     <div className="App">
//       <Carousel />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {
  let [counter, setCounter] = useState(0);
  let [loadComp, setLoadCom] = useState(false);

  function addVal() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function removeVal() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    console.log("REVERY RENDER", counter);
    return () => {
      console.log("UN REVERY RENDER,", counter);
      alert("HE");
    };
  }, [counter]);
  return (
    <>
      {loadComp ? <MyComp /> : <></>}
      <div className="container">
        <h1>
          counter value:
          {counter}
        </h1>
        <div className="btn">
          <button
            onClick={() => {
              setLoadCom(!loadComp);
            }}
          >
            {!loadComp ? "Load Components" : "Unload Components"}
          </button>
          <button onClick={addVal}>Add value</button>
          <button onClick={removeVal}>Remove value</button>
        </div>
      </div>
    </>
  );
}

function MyComp(params) {
  useEffect(() => {
    console.log("COMPONET MONTH");
    return () => {
      console.log("COMPONENT DID MONT");
      alert("HE");
    };
  }, []);

  <div>My Components</div>;
}

export default App;
