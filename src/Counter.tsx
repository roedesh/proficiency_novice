import { useState } from "react";

type CounterProps = {
  defaultValue?: number;
}

const Counter = ({defaultValue}: CounterProps) => {
  const [count, setCount] = useState(defaultValue ?? 0);

  const updateCount = (direction: number) => {
    const newCount = count + direction;
    setCount(newCount);
  };

  return (
    <div>
      Count is {count}
      <div>
        <button onClick={() => updateCount(1)}>+</button>
        <button onClick={() => updateCount(-1)} disabled={count === 0}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
