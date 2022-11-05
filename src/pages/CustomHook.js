import React, { useState } from "react";


function CustomHook() {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  if (error) {throw Error("Something went wrong");}

  const handleError = () => {
    setError(true);
  }
  const handleIncrement = () => {
    setValue((count) => count + 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  const handleDecrement = () => {
    setValue((count) => count - 1);
  };

  return (
    <>
      {/* <img src={square.jpg} alt="square"></img> */}
      <h2>Counter App made with custom hook</h2>
      <div className="main-box">
        <h1>Counter App</h1>
        <span className="output">{value}</span>
        <div className="btn-container">
          <button className="increase" onClick={handleIncrement}>
            Increment
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
          <button className="decrease" onClick={handleDecrement}>
            Decrement
          </button>

          <button className="testPage" onClick={handleError}>TestPage</button>
        </div>
      </div>
    </>
  );
}

export default CustomHook;
