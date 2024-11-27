import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <>
            <button onClick={increase}>+</button>
            <span>{count}</span>
            <button onClick={decrease}>-</button>
        </>

    )
}

export default Counter;