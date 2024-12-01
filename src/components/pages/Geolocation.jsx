import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import GEOJSON from '../../assets/rajasthangeo.json'
import hanumangarh from "../../assets/mewar.png"
// Replace this with a high-quality Rajasthan GeoJSON map
// const RAJASTHAN_TOPO_JSON = "https://github.com/shuklaneerajdev/IndiaStateTopojsonFiles/blob/master/Rajasthan.geojson";
const RAJASTHAN_TOPO_JSON = GEOJSON
// List of cities with coordinates and labels
const cities = [
  { name: "हनुमानगढ़", coordinates: [74.580421000000101, 29.463500000000117], },
  { name: "चूरू", coordinates: [74.96, 28.31] },
  { name: "झुंझुनू", coordinates: [75.4, 28.13] },
  { name: "सीकर", coordinates: [75.15, 27.61] },
  { name: "जयपुर", coordinates: [75.79, 26.92] },
  { name: "जोधपुर", coordinates: [73.02, 26.28] },
  { name: "माधवगढ़", coordinates: [74.85, 25.31] },
  { name: "मेवाड़", coordinates: [74.62, 24.89] },
];

const MapComponent = () => {
  return (
    <div className="w-full h-screen bg-yellow-200 flex items-center justify-center">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 3000, center: [74.2179, 27.0238] }} // Centering Rajasthan
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={RAJASTHAN_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#a57f58", outline: "none" },
                  hover: { fill: "#795c34", outline: "none" },
                  pressed: { fill: "#543d22", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Adding markers for cities */}
        {cities.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <image
              href="" // Add your logo here
              width={30}
              height={30}
              className="transform -translate-x-1/2 -translate-y-1/2"
            />
            <text
              textAnchor="middle"
              y={40}
              className="text-sm font-bold text-black"
            >
              {name}
              <img className="z-50" src={hanumangarh}/>
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapComponent;
