import { createContext, useState, ReactNode, useContext } from "react";

interface Provider {
  children: ReactNode;
}

interface Values {
  getValue: () => number;
  incValue: () => void;
  decValue: () => void;
  resetValue: () => void;
}

const CounterContext = createContext<undefined | Values>(undefined);

export default function CounterProvider({ children }: Provider) {
  const [count, setCount] = useState(0);

  const values: Values = {
    getValue: () => {
      return count;
    },
    incValue: () => {
      setCount((prevCount) => prevCount + 1);
    },
    decValue: () => {
      setCount((prevCount) => prevCount - 1);
    },
    resetValue: () => {
      setCount(0);
    },
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  const context: Values | undefined = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  console.log(context.getValue());

  return context;
}
