import React from 'react';

const ClickCounter = ({ counter, handleCounter }) => {
    // const { counter, handleCounter } = props;
    return (
        <div>
            <button onClick={handleCounter}>Click ME...........{counter}</button>
        </div>
    );
};

export default ClickCounter;