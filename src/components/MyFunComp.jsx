import React, { useState } from "react";

const Greeting = ({ username }) => {
  const [greeting, setGreeting] = useState("Hello");

  const changeGreeting = () => {
    setGreeting(greeting === "Hello" ? "Hi there" : "Hola");
  };

  return (
    <div>
      <h2>{greeting}, {username}!</h2>
      <p>Today's date: {new Date().toLocaleDateString()}</p> {/* Task 1: Display current date */}
      <button onClick={changeGreeting}>Change Greeting</button> {/* Task 1: Change greeting */}
    </div>
  );
};

export default Greeting;

