import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import {Fill, Style} from "ol/style.js";
import Stroke from "ol/style/Stroke.js";
import GeoJSON from "ol/format/GeoJSON.js";

export const fartrestLayer = new VectorLayer({
    source: new VectorSource({
        url: "/kws2100-exam-Ayanaro/geojson/fartrestriksjon.geojson",
        format: new GeoJSON(),
    }),
    style: new Style({
        fill: new Fill({ color: "rgba(255, 165, 0, 0.3)" }),
        stroke: new Stroke({ color: "orange", width: 2 }),
    }),
    properties: { name: "Fartsrestriksjoner" },
})