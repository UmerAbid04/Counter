import React, { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="count-container">
            <h1 className='counter'>COUNTER</h1>
            <div className="watch">
                <h2 className="count-display">{count}</h2>
                <div className="button-container">
                    <button className="counter-button" onClick={decrement}>-</button>
                    <button className="counter-button reset-button" onClick={reset}>R</button>
                    <button className="counter-button" onClick={increment}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
