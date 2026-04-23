import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { Fill, Style } from "ol/style.js";
import Stroke from "ol/style/Stroke.js";
import GeoJSON from "ol/format/GeoJSON.js";

export const friluftLayer = new VectorLayer({
    source: new VectorSource({
        url: `/geojson/Friluftsomrader.json`,
        format: new GeoJSON(),
    }),
    style: new Style({
        fill: new Fill({ color: "rgba(0, 200, 0, 0.2)" }),
        stroke: new Stroke({ color: "green", width: 2 }),
    }),
    properties: { name: "Friluftsomrader" },
})