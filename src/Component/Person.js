import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I am known as{" "}
        {person.heroName}.
      </h2>
    </div>
  );
}

export default Person;
