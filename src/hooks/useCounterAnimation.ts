import { useState, useEffect } from 'react';

export const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easedProgress * end));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  }, [end, duration]);

  return count;
};