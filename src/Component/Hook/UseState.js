import React, { useState } from 'react';

const UseState = () => {

    const [name, setName] = useState({
        firstName: 'Bangladesh',
        // secondName: 'India',
    })
    const changeName = () => {

        setName({
            firstName: 'India'
        })
    }

    return (
        <div>
            <h1>{name.firstName}</h1>
            <button onClick={changeName}>Change</button>
        </div >
    );
};

export default UseState;