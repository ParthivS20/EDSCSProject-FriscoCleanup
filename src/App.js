import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from "react-router-dom";
import "./styles.css";

import Map from "./pages/Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Map />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
