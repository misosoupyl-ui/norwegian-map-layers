import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { Fill, Style } from "ol/style.js";
import Stroke from "ol/style/Stroke.js";
import GeoJSON from "ol/format/GeoJSON.js";

export const kommuneLayer = new VectorLayer({
    source: new VectorSource({
        url: "${import.meta.env.BASE_URL}geojson/kommune.geojson",
        format: new GeoJSON(),
    }),
    style: new Style({
        fill: new Fill({ color: "rgba(0, 60, 255, 0)" }),
        stroke: new Stroke({ color: "green", width: 2 }),
    }),
    properties: {
        name: "Kommuner",
        showName: true,
        nameKey: "kommunenavn",
        hoverColor: "rgba(0, 60, 255, 0.15)"
    },
})