import React, { useState } from "react";
import { Button } from "./components/Button";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  const handleStart = () => {
    setShowTimer(true);
  };

  const handleTimerEnd = () => {
    setShowTimer(false);
  };

  return (
    <>
      {showTimer ? (
        <Timer onEnd={handleTimerEnd} />
      ) : (
        <Button buttonHandler={handleStart} label="타이머 시작" color="black" />
      )}
    </>
  );
}

export default App;
