import {useEffect, useState} from "react";
import "../css/counter.css"

const Counter = (props) => {

    const {size, setSum} = props;
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
    }, [size]);

    const increase = () => {
        setCount((count) => count + 1);
        setSum((sum) => sum + 1);
    }
    const decrease = () => {
        setCount((count) => count - 1);
        setSum((sum) => sum - 1);
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            <span className={"count-number-wrapper"}>{count}</span>
            <button onClick={decrease}>-</button>
        </div>

    )
}

export default Counter;