import GeoJSON from "ol/format/GEOJSON.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { Fill, Style } from "ol/style.js";
import Stroke from "ol/style/Stroke.js";
import CircleStyle from "ol/style/Circle.js";

export const fiskehavnerLayer = new VectorLayer({
    source: new VectorSource({
        url: "/geojson/fiskehavner.geojson",
        format: new GeoJSON(),
    }),
    style: new Style({
        image: new CircleStyle({
            radius: 5,
            fill: new Fill({ color: "#003399" }),
            stroke: new Stroke({ color: "white", width: 1 }),
        }),
    }),
    properties: { name: "Fiskehavner" },
})