import Part from "./Part"

const Content = (props) => {
    return (
        <div>
            <Part name={props.exercisesPerPart[0].part} exercises={props.exercisesPerPart[0].exercises} />
            <Part name={props.exercisesPerPart[1].part} exercises={props.exercisesPerPart[1].exercises} />
            <Part name={props.exercisesPerPart[2].part} exercises={props.exercisesPerPart[2].exercises} />
        </div>
    )
}

export default Content