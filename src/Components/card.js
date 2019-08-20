import React, { Component } from "react";
import Cardlist from "./card-list.js";
import "./card.css";

class Card extends Component {
  render() {
    return this.props.Robots.map(robot => (
      <Cardlist key={robot.id} cardlist={robot} />
    ));
  }
}

export default Card;
