import React, { Component } from "react";
import { Marker } from "react-map-gl";
import "../styles.css";

class MapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <Marker
        key={this.props.location.name}
        latitude={this.props.location.latitude}
        longitude={this.props.location.longitude}
        offsetTop={-25}
        offsetLeft={-12.5}
      >
        <button
          className="map-pin-btn"
          onClick={(e) => {
            e.preventDefault();
            this.props.updateSelectedLocation(this.props.location);
          }}
          /*onMouseEnter={(e) => {
            console.log("Enter");
            e.preventDefault();
            this.setState({
              hoveredLocation: l
            });
          }}
          onMouseLeave={(e) => {
            console.log("Leave");
            e.preventDefault();
            this.setState({
              hoveredLocation: null
            });
          }}*/
        >
          <img src="/map-pin.png" alt="map-pin" className="map-pin" />
        </button>
      </Marker>
    );
  }
}

export default MapMarker;
