const Person = ({ person }) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  )
}

const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => (
          <Person key={person.id} person={person} />
        ))}
    </div>
  );
}

export default Persons;