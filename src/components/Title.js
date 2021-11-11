import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../styles.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <Helmet>
        <title>{this.props.title + " | Frisco Cleanup"}</title>
      </Helmet>
    );
  }
}

export default Title;
