import { useCallback, useState } from "react";

export interface IUseProduct {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = (): IUseProduct => {
  const [counter, setCounter] = useState<number>(0);

  const increaseBy = useCallback(
    (value: number) => setCounter((state) => Math.max(state + value, 0)),
    []
  );

  return { counter, increaseBy };
};
