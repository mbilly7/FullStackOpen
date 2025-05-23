import StatisticsLine from './StatisticsLine'

const Statistics = ({ good, neutral, bad }) => {
    if (good + neutral + bad === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <StatisticsLine text="good" value={good} />
                <StatisticsLine text="neutral" value={neutral} />
                <StatisticsLine text="bad" value={bad} />
                <StatisticsLine text="all" value={good + neutral + bad} />
                <StatisticsLine text="average" value={((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)} />
                <StatisticsLine text="positive" value={good / (good + neutral + bad) * 100 + " %"} />
            </tbody>
        </table>
    )
}

export default Statistics