import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      clearInterval(intervalRef.current);
      setTimerExpired(true);
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimer({ days, hours, minutes, seconds });
    }
  };

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timerExpired, setTimerExpired] = useState(false);
  const intervalRef = React.useRef();

  useEffect(() => {
    calculateTimeRemaining();
    intervalRef.current = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [targetDate]);

  return (
    // text-center
    <div className="">
      {timerExpired ? (
        <p className="text-4xl font-bold text-red-500">Timer Expired!</p>
      ) : (
        <div className="flex text-3xl ">
          <div className="flex items-center justify-center">
            <div>
              <p className="text-[10px] -my-[15px] font-bold">Days</p>
               <p className="">
                    {timer.days}
                    <span className="text-red-600 px-2">:</span>
                  </p>
            </div>

            <div>
                <p className="text-[10px] -my-[15px] font-bold">Hours</p>
                <p className="">
                    {timer.hours}
                    <span className="text-red-600 px-2">:</span>
                  </p>
            </div>

            <div>
              <p className="text-[10px] -my-[15px] font-bold">Minutes</p>
              <p className="">
                    {timer.minutes}
                    <span className="text-red-600 px-2">:</span>
                  </p>
            </div>

            <div>
              <p className="text-[10px] -my-[15px] font-bold">Seconds</p>
              <p className="">{timer.seconds}</p>

            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
