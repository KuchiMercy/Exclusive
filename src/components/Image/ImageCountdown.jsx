import React, { useState, useEffect } from "react";

const ImageCountdown = ({ targetDate }) => {
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
        <div className="flex text-black text-center items-center ">
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-col items-center bg-white rounded-full h-12 w-12 mr-2">
              <p className="font-bold">{timer.days}</p>
              <p className="text-[11px]">Days</p>
            </div>

            <div className=" flex flex-col items-center bg-white rounded-full h-12 w-12 mr-2 ">
              <p className="font-bold">{timer.hours}</p>
              <p className="text-[11px]">Hours</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-full h-12 w-12 mr-2">
              <p className="font-bold">{timer.minutes}</p>
              <p className="text-[11px]">Minutes</p>
            </div>

            <div className=" flex flex-col items-center bg-white rounded-full h-12 w-12 mr-2">
              <p className="font-bold">{timer.seconds}</p>
              <p className="text-[11px]">Seconds</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCountdown;
