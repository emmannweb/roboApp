import React, { Component } from "react";
import Card from "./Components/card.js";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Robots: [],
      SearchRobot: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/").then(response =>
      response.json().then(users => this.setState({ Robots: users }))
    );
  }
  render() {
    const { Robots, SearchRobot } = this.state;
    const FilterRobots = Robots.filter(filterRobot =>
      filterRobot.name.toLowerCase().includes(SearchRobot.toLowerCase())
    );
    return (
      <div className="App ">
        <div className="container-fluid remove-pd">
          <div className="header">
            <h1> Robots App</h1>
          </div>
          <input
            type="search"
            placeholder="Search a Robot"
            className="search__input"
            onChange={e => this.setState({ SearchRobot: e.target.value })}
          />

          <div className="container">
            <div className="row">
              <Card Robots={FilterRobots} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
