import classes from "./Counter.module.css";

import { counterActions } from "../store/counter";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <button onClick={decrementHandler}>decrement</button>
            <button onClick={increaseHandler}>increase</button>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
