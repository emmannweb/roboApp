import React, { Component } from "react";
import Card from "./Components/card";
import Search from "./Components/Search";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Robots: [],
      SearchRobot: ""
    };
  }

  fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users/").then(response =>
      response.json().then(result => this.setState({ Robots: result }))
    );
  };

  SearchField = e => {
    this.setState({ SearchRobot: e.target.value });
  };

  componentDidMount() {
    this.fetchApi();
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
          <Search PropSearch={this.SearchField} />

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
