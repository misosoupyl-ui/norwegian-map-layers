import GeoJSON from "ol/format/GEOJSON.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { Fill, Style } from "ol/style.js";
import Stroke from "ol/style/Stroke.js";

export const stateProtectedAreasSoruce = new VectorSource({
  url: "/geojson/FriStatsikraGEOJSON.json",
  format: new GeoJSON(),
});

export const stateProtectedAreasLayer = new VectorLayer({
  source: stateProtectedAreasSoruce,
  style: new Style({
    fill: new Fill({
      color: "rgba(80,0,114,0.3)",
    }),
    stroke: new Stroke({
      color: "#1e1449",
      width: 2,
    }),
  }),
});
