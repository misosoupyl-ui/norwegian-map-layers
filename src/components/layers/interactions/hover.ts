import Map from "ol/Map.js";
import type { MapBrowserEvent } from "ol";
import VectorLayer from "ol/layer/Vector.js";
import type { FeatureLike } from "ol/Feature.js";
import { Style, Stroke, Fill } from "ol/style.js";

function activeStyle(feature: FeatureLike) {
    return new Style({
        stroke: new Stroke({
            width: 3,
        }),
        fill: new Fill({
            color: "rgba(0, 58, 255, 0.2)",
        }),
    });
}

export function attachHover(map: Map, layers: VectorLayer[]) {
    let hoveredFeature: FeatureLike | null = null;

    map.on("pointermove", (e: MapBrowserEvent<any>) => {
        // Reset kun forrige hovered feature, ikke alle
        if (hoveredFeature) {
            (hoveredFeature as any).setStyle(undefined);
            hoveredFeature = null;
        }

        map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
            if (layers.includes(layer as VectorLayer)) {
                (feature as any).setStyle(activeStyle(feature));
                hoveredFeature = feature;
                return true;
            }
        });
    });
}