const Statistics = ({ good, neutral, bad }) => {
    return (
        <div>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {good + neutral + bad}</div>
            <div>average {((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)}</div>
            <div>positive {good / (good + neutral + bad) * 100} %</div>
        </div>
    )
}

export default Statistics