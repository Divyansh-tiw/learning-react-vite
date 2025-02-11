import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrement] = useState(1);
  const [decrementBy, setDecrement] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    if (count > decrementBy) {
      setCount(count - decrementBy);
    }
  }
  function increaseIncrement() {
    setIncrement(incrementBy + 1);
  }
  function decreaseIncrement() {
    if (incrementBy > 1) {
      setIncrement(incrementBy - 1);
    }
  }
  function increaseDecrement() {
    if (decrementBy < count) {
      setDecrement(decrementBy + 1);
    }
  }
  function decreaseDecrement() {
    if (decrementBy > 1) {
      setDecrement(decrementBy - 1);
    }
  }
  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1>Count: {count}</h1>
        <p className="warning">
          {count === 0 ? "You cannot decrement further" : ""}
        </p>
        <div className="button-group">
          <button className="increment" onClick={increment}>
            Increment
          </button>
          <button className="decrement" onClick={decrement}>
            Decrement
          </button>
        </div>

        <h2>Increment By: {incrementBy}</h2>
        <p className="warning">
          {incrementBy === 1 ? "You can't lower the value anymore" : ""}
        </p>
        <div className="button-group">
          <button className="increase" onClick={increaseIncrement}>
            Increase
          </button>
          <button className="decrease" onClick={decreaseIncrement}>
            Decrease
          </button>
        </div>

        <h2>Decrement By: {decrementBy}</h2>
        <p className="warning">
          {decrementBy >= count ? "You can't decrement by this value" : ""}
        </p>
        <div className="button-group">
          <button className="increase" onClick={increaseDecrement}>
            Increase
          </button>
          <button className="decrease" onClick={decreaseDecrement}>
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
