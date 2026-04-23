
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { Fill, Style } from "ol/style.js";
import Stroke from "ol/style/Stroke.js";
import GeoJSON from "ol/format/GeoJSON.js";

export const hummerLayer = new VectorLayer({
    source: new VectorSource({
        url: `/geojson/hummer.geojson`,
        format: new GeoJSON(),
    }),
    style: new Style({
        fill: new Fill({ color: "rgba(255, 0, 0, 0.2)" }),
        stroke: new Stroke({ color: "red", width: 2 }),
    }),
    properties: { name: "Hummerfredning" },
})