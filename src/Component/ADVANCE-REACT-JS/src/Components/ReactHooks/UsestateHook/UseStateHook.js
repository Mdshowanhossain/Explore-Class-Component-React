import React, { useState } from 'react';

const UseStateHook = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleTodo = (e) => {
        const eventValue = e.target.value;
        setTodo(eventValue);
        const warning = eventValue.includes('.js') ? 'First You Need To Learn JavaScript' : '';
        setWarning(warning);

    }

    return (
        <div>

            <h1>{todo}</h1>
            <input onChange={handleTodo} type="text" placeholder="TODO" />

            {
                <h2>{warning || ''}</h2>
            }
        </div>
    );
};

export default UseStateHook;