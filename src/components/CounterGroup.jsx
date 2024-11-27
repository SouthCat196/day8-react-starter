import Counter from "./Counter";

const CounterGroup = (props) => {
    const {size} = props;

    return (
        <div>
            {Array.from({length: props.size}).map((_, index) => {
                return <Counter key={index + Math.random()}/>
            })}
        </div>
    )
}

export default CounterGroup;