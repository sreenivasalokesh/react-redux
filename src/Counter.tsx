import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "./hooks";

export const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const [amount, setAmount] = useState("");
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>++</button>
      {count}
      <button onClick={() => dispatch(decrement())}>--</button>

      <input type={"text"} onChange={(e) => setAmount(e.target.value)}></input>
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
        By
      </button>
    </>
  );
};
