const Total = (props) => {
    return (
        <p>Number of exercises {props.exercisesPerPart[0].exercises + 
            props.exercisesPerPart[1].exercises + props.exercisesPerPart[2].exercises}</p>
    )
}

export default Total