const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
)

const Content = ({parts}) => (
    <div>
        {parts.map(part => <Part key={part.name} part={part} />)}
    </div>
)

const Total = (props) => <p><b>total of {props.total} exercises</b></p>

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

export default Course