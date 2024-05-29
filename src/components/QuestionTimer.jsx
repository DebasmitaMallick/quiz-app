import React, { useEffect, useState } from "react";

export const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('started')
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
        clearInterval(interval);
    }
  }, []);
  return <progress id="question-time" value={remainingTime} max={timeout} className={mode} />;
};
