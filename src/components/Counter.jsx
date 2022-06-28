import './Counter.css';
import { useState } from 'react';

export function Counter () {
    const counterState = useState(0);
    const counter = counterState[0];
    const setCounter = counterState[1];

    const handleClick = () => {
        //setCounter(counter + 1);
        setCounter((state) => ++state);
    }

    const minusClick = () => {
        //setCounter(counter - 1);
        setCounter((state) => --state);
    }

    return(
    <div>
        <button className='plusMinus' onClick={minusClick}>-</button>
        <button className="counter">{counter}</button>
        <button className='plusMinus' onClick={handleClick}>+</button>
    </div>
    );
}