import React, { useState } from 'react';

const CounterStateHook = () => {
    const [count, setCount] = useState(0);


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Clink Here</button><br />
            <h2>{count}</h2>
            <button onClick={() => setCount((prevCount) => prevCount + 5)}>Clink Here</button>
        </div >
    );
};

export default CounterStateHook;