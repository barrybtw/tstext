import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { getValue, incValue, decValue, resetValue } = useCounter();

  return (
    <div>
      <h1>Counter</h1>
      <span>{getValue() ?? 0}</span>

      <br />
      <button onClick={incValue}>Increase</button>
      <button onClick={decValue}>Decrease</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  );
}
