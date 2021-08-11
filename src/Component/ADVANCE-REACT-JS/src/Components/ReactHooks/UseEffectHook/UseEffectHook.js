import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('')

    const handleUpdate = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const updateTime = () => {
        setDate(new Date());
    }

    useEffect(() => {
        document.title = `I am Updating ${count}`
    }, [count])

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);

        return () => {
            console.log('Component unMount');
            clearInterval(interval)
        }

    }, [])


    return (
        <div>
            <h1>Time: {date.toLocaleTimeString()}</h1>
            <h2>{count}</h2>

            <button onClick={handleUpdate}>UpdateCount</button>

            <input type="text" placeholder="text" onChange={(e) => setText(e.target.value)} />

        </div>
    );
};

export default UseEffectHook;