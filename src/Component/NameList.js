import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
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
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personList}</div>;

  // Index as Key Anti-pattern
  // const nameList = names.map((name, index) => (
  //   <h2 key={index}>
  //     {" "}
  //     {index} {name}
  //   </h2>
  // ));
  // return <div>{nameList}</div>;
}

export default NameList;
