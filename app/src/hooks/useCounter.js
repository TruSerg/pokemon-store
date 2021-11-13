import { useState, useCallback } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = useCallback(() => {
    if (count > 0) setCount(count - 1);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleReset = useCallback(() => setCount(initialCount), []);
};

export default useCounter;
