import TileLayer from "ol/layer/Tile.js";
import {TileWMS} from "ol/source.js";

export const kartverketLayer = new TileLayer({
    source: new TileWMS({
        url: "https://wms.geonorge.no/skwms1/wms.topo",
        params: { LAYERS: "topo", FORMAT: "image/png" },
    }),
    properties: { name: "Kartverket Topo" },
    visible: false,
})