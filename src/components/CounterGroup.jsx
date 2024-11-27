import Counter from "./Counter";

const CounterGroup = (props) => {
    const {size, setSum} = props;

    const counters = Array.from({ length: size }).map((_, index) => (
        <Counter key={index} size={size} setSum={setSum} />
    ));

    return <div>{counters}</div>;
}

export default CounterGroup;