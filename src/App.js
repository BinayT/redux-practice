import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./actions";

export default () => {
  const counter = useSelector((state) => state.counter);
  const loggedReducer = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={() => dispatch(isLogged())}>Log in</button>
      {loggedReducer ? <h3>Valueable info</h3> : null}
    </div>
  );
};
