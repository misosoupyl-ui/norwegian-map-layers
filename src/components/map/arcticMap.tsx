import TileLayer from "ol/layer/Tile.js";
import {WMTSCapabilities} from "ol/format.js";
import {WMTS} from "ol/source.js";
import {optionsFromCapabilities} from "ol/source/WMTS.js";

const arcticLayer = new TileLayer({});
const arcticUrl = "/wmts/arctic-sdi.xml";


//Converts xml file to js object.
fetch(arcticUrl).then(async (response) => {
    const wmtsParser = new WMTSCapabilities();
    const capabilites = wmtsParser.read(await response.text());

// connects arctic map tiles to our layer
    arcticLayer.setSource(
        new WMTS(
            optionsFromCapabilities(capabilites, {
                layer: "arctic_cascading",
                // Projection that is viewed from the north pole
                matrixSet: "3575",
            })!,
        ),
    );
}).catch((error) =>{
    console.error("Failed to load Arctic map",error)
    }
)
