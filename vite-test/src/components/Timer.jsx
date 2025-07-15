import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 800;
`;

const TimerSpanWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Timer = ({ onEnd }) => {
  const [timer, setTimer] = useState(10);
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      if (interval) clearInterval(interval);
      if (onEnd) onEnd();
    }
    return () => interval && clearInterval(interval);
  }, [isRunning, timer, onEnd]);

  return (
    <>
      <TimerDivWrapper>
        <div>Time: {elapsed} Seconds</div>
      </TimerDivWrapper>
      <TimerSpanWrapper>
        <span>남은 시간: {timer}</span>
      </TimerSpanWrapper>
    </>
  );
};

export default Timer;
