function ClickButtonHook(props) {
    const [count, setCount] = React.useState(0);

    const press = function () {
        setCount(count + props.increment);
    };

    return (<div>
        <button onClick={press}>Count</button>
        <div>Counter: {count}<br /> Increment: {props.increment}</div>
    </div>);
}

ReactDOM.render(
    <ClickButtonHook increment={5} />,
    document.getElementById("app")
)