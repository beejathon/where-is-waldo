import React, { useEffect, useState } from "react";

const Timer = ({gameStart}) => {
  const [seconds, setSeconds] = useState(0);

  const reset = () => {
    setSeconds(0);
  }

  useEffect(() => {
    let interval = null;
    if (gameStart) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds +1)
      }, 1000);
    } else if (!gameStart && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStart, seconds])

  return (
    <div className="timer-container">
      <div>{seconds} seconds</div>
    </div>
  )

}

export default Timer;