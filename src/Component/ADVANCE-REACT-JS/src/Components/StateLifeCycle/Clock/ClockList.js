import React from 'react';
import Clock from './Clock';

const ClockList = ({ quantities = [] }) => {
    return (
        <div>
            {
                quantities.map(() => (
                    <Clock />
                ))
            }
        </div>
    );
};

export default ClockList;