import TileLayer from "ol/layer/Tile.js";
import {WMTSCapabilities} from "ol/format.js";
import {WMTS} from "ol/source.js";
import {optionsFromCapabilities} from "ol/source/WMTS.js";

const arcticLayer = new TileLayer({});
const arcticUrl = "/wmts/arctic-sdi.xml";

fetch(arcticUrl).then(async (response) => {
    const wmtsParser = new WMTSCapabilities();
    const capabilites = wmtsParser.read(await response.text());


    arcticLayer.setSource(
        new WMTS(
            optionsFromCapabilities(capabilites, {
                layer: "arctic_cascading",
                matrixSet: "3575",
            })!,
        ),
    );
});
