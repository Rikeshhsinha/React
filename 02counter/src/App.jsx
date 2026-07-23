import { useState } from "react";

import "./App.css";

function App() {

 let [counter ,setCounter] = useState(1);

  const addValue = () => {
    if (counter === 20){
      return;
    }
     counter =counter +1;
     console.log(counter);
     
    setCounter(counter)
  
  };

  const subValue = function(){
    if(counter === 0){
      return;
    }

    counter = counter - 1;
    console.log(counter);
    setCounter(counter)
    
  }

  return (
    <>
      <div className="container">
        <h1 id="h1">Rikesh kumar</h1>
        <h2>COUNTER : {counter}</h2>
        <div className="button">
          <button className="btn" onClick={addValue}>
            Increase value{counter}
          </button>
          <button className="btn"
          onClick={subValue}>Decrease value{counter}
          </button>
        </div>
      </div>
      
    </>
  );
}

export default App;
