//kode inspo fra : https://openlayers.org/en/latest/examples/overviewmap-custom.html
import OverviewMap from 'ol/control/OverviewMap.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

export const overviewMapControl = new OverviewMap({
    collapsed: false,
    className: 'ol-custom-overviewmap ol-overviewmap',
    layers: [new TileLayer({ source: new OSM() })],
});

