import TileLayer from "ol/layer/Tile.js";
import {WMTSCapabilities} from "ol/format.js";
import {WMTS} from "ol/source.js";
import {optionsFromCapabilities} from "ol/source/WMTS.js";
import proj4 from "proj4";
import {register} from "ol/proj/proj4.js";


export const arcticLayer = new TileLayer({ visible: false});
const arcticUrl = "/kws2100-exam-Ayanaro/wmts/arctic-sdi.xml";


//Converts xml file to js object.
fetch(arcticUrl).then(async (response) => {
    const wmtsParser = new WMTSCapabilities();
    const capabilities = wmtsParser.read(await response.text());

// connects arctic map tiles to our layer
    arcticLayer.setSource(
        new WMTS(
            optionsFromCapabilities(capabilities, {
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

//defines the arctic projection so OpenLayers knows how to display the map
proj4.defs(
    "EPSG:3575",
    "+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs",
);
register(proj4);