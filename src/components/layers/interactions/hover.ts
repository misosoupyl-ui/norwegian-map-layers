import Map from "ol/Map.js";
import type { MapBrowserEvent } from "ol";
import VectorLayer from "ol/layer/Vector.js";
import type { FeatureLike } from "ol/Feature.js";
import { Style, Stroke, Fill, Text } from "ol/style.js";  // ← Text lagt til

function activeStyle(feature: FeatureLike, layer: VectorLayer) {
    const hoverColor = layer.get("hoverColor") ?? "rgba(53, 143, 37, 0.5)";
    const showName = layer.get("showName") as boolean;
    const nameKey  = layer.get("nameKey")  as string;

    return new Style({
        stroke: new Stroke({ width: 3 }),
        fill: new Fill({ color: hoverColor }),
        text: showName && nameKey
            ? new Text({
                text: feature.get(nameKey) ?? "",
                font: "bold 10px",
                fill: new Fill({ color: "#000" }),
                stroke: new Stroke({ color: "#fff", width: 5 }),
            })
            : undefined,
    });
}

export function attachHover(map: Map, layers: VectorLayer[]) {
    let hoveredFeature: FeatureLike | null = null;

    map.on("pointermove", (e: MapBrowserEvent<any>) => {
        if (hoveredFeature) {
            (hoveredFeature as any).setStyle(undefined);
            hoveredFeature = null;
        }

        map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
            if (layers.includes(layer as VectorLayer)) {
                (feature as any).setStyle(activeStyle(feature, layer as VectorLayer));
                hoveredFeature = feature;
                return true;
            }
        });
    });
}