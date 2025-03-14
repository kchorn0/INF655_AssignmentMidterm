import React, { Component } from "react";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kyle Horn",
      profession: "Web Programmer",
      luckyNumber: Math.floor(Math.random() * 100) + 1, // Task 2: Add lucky number
    };
  }

  generateNewLuckyNumber = () => {
    this.setState({ luckyNumber: Math.floor(Math.random() * 100) + 1 }); // Task 2: Update lucky number
  };

  render() {
    return (
      <div>
        <h2>User Information</h2>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is: {this.state.luckyNumber}</p> {/* Task 2: Display lucky number */}
        <button onClick={this.generateNewLuckyNumber}>Generate New Lucky Number</button> {/* Task 2: Button to update number */}
      </div>
    );
  }
}

export default UserInfo;

