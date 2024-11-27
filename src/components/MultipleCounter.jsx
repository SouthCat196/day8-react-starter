import {useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {

    const [size, setSize] = useState(0);

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize}></CounterGroupGenerator>
            <CounterGroup size={size}/>
        </div>
    )

}

export default MultipleCounter;