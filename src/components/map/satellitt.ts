import TileLayer from "ol/layer/Tile.js";
import {XYZ} from "ol/source.js";

export const satellittLayer = new TileLayer({
    source: new XYZ({
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    }),
    properties: { name: "Satellitt" },
    visible: false,
})