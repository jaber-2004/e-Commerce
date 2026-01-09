import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "/src/features/counter/counterSlice";


export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
