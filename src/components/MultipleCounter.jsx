import {useEffect, useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {

    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(0);
    }, [size])

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize}></CounterGroupGenerator>
            <CounterGroupSum sum={sum} setSum={setSum}/>
            <CounterGroup size={size} setSum={setSum}/>
        </div>
    )

}

export default MultipleCounter;