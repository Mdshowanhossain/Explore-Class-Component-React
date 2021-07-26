import React from 'react';

const ButtonClickF = () => {

    const btnClick = (a) => {
        alert(a);
    }
    return (
        <div>
            <button onClick={() => btnClick('I am Function Component')}>Click Me</button>
        </div>
    );
};

export default ButtonClickF;