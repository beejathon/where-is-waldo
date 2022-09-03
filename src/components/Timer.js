import React from "react";

const Timer = ({seconds}) => {

  return (
    <div className="timer-container">
      {seconds} seconds
    </div>
  )
}

export default Timer;