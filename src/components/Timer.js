import React from "react";

const Timer = ({seconds}) => {

  return (
    <div className="timer-container">
      <div>{seconds} seconds</div>
    </div>
  )
}

export default Timer;