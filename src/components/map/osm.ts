import TileLayer from "ol/layer/Tile.js";
import {OSM} from "ol/source.js";


export const osmLayer = new TileLayer({
    source: new OSM(),
    properties: { name: "OpenStreetMap" },
})