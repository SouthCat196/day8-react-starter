import {useState} from "react";

const CounterGroupGenerator = (props) => {

    const [size, setSize] = useState(0);

    const handleChange = (event) => {
        let newSize = event.target.value;
        if (newSize < 0) {
            newSize = 0;
        }
        if (newSize > 20) {
            newSize = 20;
        }
        setSize(newSize);
    };

    const handleReset = () => {
        props.setSize(size);
    }

    return (
        <div>
            <span>Size:</span>
            <input min={0} max={20} type="number" value={size} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default CounterGroupGenerator;