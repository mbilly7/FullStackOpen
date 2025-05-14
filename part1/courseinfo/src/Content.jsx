const Content = (props) => {
    return (
        <div>
            <p>{props.exercisesPerPart[0].part} {props.exercisesPerPart[0].exercises}</p>
            <p>{props.exercisesPerPart[1].part} {props.exercisesPerPart[1].exercises}</p>
            <p>{props.exercisesPerPart[2].part} {props.exercisesPerPart[2].exercises}</p>
        </div>
    )
}

export default Content