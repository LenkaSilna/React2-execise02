import React, { useState } from "react";

const TimeDisplay = () => {
    const [time, setTime] = useState({
        hours: 13,
        minutes: 24,
        seconds: 58,
      });

const addMinute = () => {
    if (minutes === 59) {
        setTime({ ...time, hours: time.hours + 1, minutes: 0 });
      } else {
        setTime({ ...time, minutes: time.minutes + 1 });
      }
}

  return (
    <p style={{textAlign: "center"}}>{time.hours}:{time.minutes}:{time.seconds}</p>
  );

}
export default TimeDisplay;