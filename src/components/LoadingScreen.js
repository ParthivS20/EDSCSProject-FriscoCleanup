import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import Title from "./Title";

class LoadingScreen extends Component {
  constructor() {
    super();
    this.state = {};
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <div>
        <Title title="Loading..." />
        <div className="loader-container">
          <FontAwesomeIcon
            icon={faSync}
            spin
            className="spin-fast loader-spinner"
          />
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
