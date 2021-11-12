import React, { Component } from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles.css";

import Title from "../components/Title";
import MapMarker from "../components/MapMarker";
import MapPopup from "../components/MapPopup";
import LoadingScreen from "../components/LoadingScreen";

class Map extends Component {
  constructor() {
    super();
    this.defaultViewport = {
      width: "95vw",
      height: "95vh",
      latitude: 33.1499819,
      longitude: -96.8340679,
      zoom: 11.45
    };
    this.state = {
      viewport: this.defaultViewport,
      selectedLocation: null,
      //hoveredLocation: null,
      mapMode: true,
      loaded: false,
      locations: []
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeViewport);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
        this.setState({
          loaded: true,
          locations: JSON.parse(xmlHttp.responseText)
        });
      }
    }.bind(this);

    xmlHttp.open("GET", process.env.BACKEND_URL + "/cleanup-locations", true); // true for asynchronous
    try {
      xmlHttp.send();
    } catch (e) {}
  }

  resetViewport = () => {
    this.setState({ viewport: this.defaultViewport });
  };

  resizeViewport = () => {
    this.setState((state) => {
      const newViewport = { ...state.viewport };
      newViewport.width = "95vw";
      newViewport.height = "95vh";
      return { viewport: newViewport };
    });
  };

  updateSelectedLocation = (location) => {
    this.setState({ selectedLocation: location });
  };

  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <LoadingScreen />
        </div>
      );
    } else {
      return (
        <div>
          <Title title="Map" />
          <div className="map-wrapper">
            <ReactMapGl
              {...this.state.viewport}
              onViewportChange={(viewport) => {
                /*
                if (
                  !this.state.loaded ||
                  (viewport.zoom >= 11 && viewport.zoom <= 19.5)
                ) {
                  this.setState({ viewport: viewport, loaded: true });
                }*/
                this.setState({ viewport: viewport });
              }}
              mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
              mapStyle={
                this.state.mapMode
                  ? "mapbox://styles/mapbox/streets-v11"
                  : "mapbox://styles/mapbox/satellite-streets-v11"
              }
            >
              {this.state.locations.map((l) => {
                return (
                  <MapMarker
                    key={l.name}
                    location={l}
                    updateSelectedLocation={this.updateSelectedLocation}
                  />
                );
              })}

              {this.state.selectedLocation ? (
                <MapPopup
                  location={this.state.selectedLocation}
                  updateSelectedLocation={this.updateSelectedLocation}
                />
              ) : null}
            </ReactMapGl>
          </div>

          <button
            onClick={() => {
              this.setState((state) => {
                return { mapMode: !state.mapMode };
              });
            }}
            className="switch-btn"
          >
            Switch
          </button>
          <button onClick={() => this.resetViewport()} className="reset-btn">
            Reset
          </button>
        </div>
      );
    }
  }
}

export default Map;

/*{
  this.state.hoveredLocation &&
  !(this.state.selectedLocation
    ? this.state.selectedLocation.latitude ===
        this.state.hoveredLocation.latitude &&
      this.state.selectedLocation.longitude ===
        this.state.hoveredLocation.longitude
    : false) ? (
    <Popup
      latitude={this.state.hoveredLocation.latitude}
      longitude={this.state.hoveredLocation.longitude}
      onClose={() => {
        this.setState({ hoveredLocation: null });
      }}
      closeButton={false}
    >
      <div>
        <p>{this.state.hoveredLocation.name}</p>
      </div>
    </Popup>
  ) : null;
}*/
