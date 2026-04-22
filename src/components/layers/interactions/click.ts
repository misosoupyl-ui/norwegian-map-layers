import Map from "ol/Map.js";
import Overlay from "ol/Overlay.js";
import type { MapBrowserEvent } from "ol";
import type VectorLayer from "ol/layer/Vector.js";
import type { FeatureLike } from "ol/Feature.js";

type ClickOptions = {
    map: Map;
    layers: VectorLayer[];
    overlay: Overlay;
    setSelectedFeature: (f: FeatureLike | null) => void;
};

export function attachClick({
                                map,
                                layers,
                                overlay,
                                setSelectedFeature,
                            }: ClickOptions) {
    map.on("click", (e: MapBrowserEvent<any>) => {
        let foundFeature: FeatureLike | null = null;

        map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
            const l = layer as VectorLayer;

            if (layers.includes(l) && l.get("clickable")) {
                foundFeature = feature;
                return true; // stopper loop
            }
        });

        setSelectedFeature(foundFeature);

        overlay.setPosition(foundFeature ? e.coordinate : undefined);
    });
}