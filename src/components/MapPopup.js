import React, { Component } from "react";
import { Popup } from "react-map-gl";
import "../styles.css";

class MapPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <Popup
        latitude={this.props.location.latitude}
        longitude={this.props.location.longitude}
        onClose={() => {
          this.props.updateSelectedLocation(null);
        }}
      >
        <div>
          <h4>{this.props.location.name}</h4>
          <p>
            {this.props.location.latitude +
              ", " +
              this.props.location.longitude}
          </p>
        </div>
      </Popup>
    );
  }
}

export default MapPopup;
