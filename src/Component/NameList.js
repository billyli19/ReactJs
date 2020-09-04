import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      heroName: "Batman",
    },
    {
      id: 2,
      name: "Clark",
      age: 32,
      heroName: "Superman",
    },
    {
      id: 3,
      name: "Diana",
      age: 31,
      heroName: "Wonderwoman",
    },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
