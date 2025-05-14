import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const exercisesPerPart = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercisesPerPart={exercisesPerPart} />
      <Total exercisesPerPart={exercisesPerPart} />
    </div>
  )
}

export default App