import React, { useEffect, useRef, useState, useMemo } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source.js";
import Overlay from "ol/Overlay.js";
import type { FeatureLike } from "ol/Feature.js";
import { useGeographic } from "ol/proj.js";
import {overviewMapControl} from "../map/mapOverviewConfig.js";
import {defaults as defaultControls} from 'ol/control/defaults.js';

import { LayerToggle } from "../ui/LayerToggle.js";

import "ol/ol.css";

import {stateProtectedAreasLayer} from "../layers/stateProtectedAreas/stateProtectedAreasLayers.js";
import {fiskehavnerLayer} from "../layers/fiskehavner/fiskehavner.js";
import {friluftLayer} from "../layers/friluft/friluft.js";
import {hummerLayer} from "../layers/hummer/hummer.js";
import {kommuneLayer} from "../layers/kommune/kommune.js";
import { attachClick } from "../layers/interactions/click.js";
import {fartrestLayer} from "../layers/fartRestrikt/fartrestrikt.js";
import { attachHover } from "../layers/interactions/hover.js";

import "./application.css";

useGeographic();


const map = new Map({
  controls: defaultControls().extend([overviewMapControl]),
  view: new View({ center: [11, 60], zoom: 8 }),
  layers: [new TileLayer({ source: new OSM() }),
    kommuneLayer,
    stateProtectedAreasLayer,
    fiskehavnerLayer,
    friluftLayer,
    hummerLayer,
    fartrestLayer,
  ],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [selectedFeature, setSelectedFeature] =
      useState<FeatureLike | null>(null);

  // refererer til hover.ts
  const [visibility, setVisibility] = useState({
    kommune: true,
    stateProtected: true,
    fiskehavner: true,
    friluft: true,
    hummer: true,
    //fartrestiksjon
  });

  const layerConfig = [
    { key: "kommune", layer: kommuneLayer },
    { key: "stateProtected", layer: stateProtectedAreasLayer },
    { key: "fiskehavner", layer: fiskehavnerLayer },
    { key: "friluft", layer: friluftLayer },
    { key: "hummer", layer: hummerLayer },
  ];

  const overlay = useMemo(
      () =>
          new Overlay({
            positioning: "bottom-center",
          }),
      []
  );

  const layers = [
    kommuneLayer,
    stateProtectedAreasLayer,
    friluftLayer,
    hummerLayer,
    fartrestLayer,
  ];

  useEffect(() => {
    map.setTarget(mapRef.current!);

    overlay.setElement(overlayRef.current!);
    map.addOverlay(overlay);

    attachHover(map, layers);

    const clickableLayers = layers.filter((l) => l.get("clickable"));

    attachClick({
      map,
      layers: clickableLayers,
      overlay,
      setSelectedFeature,
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  //toggle funksjon
  useEffect(() => {
    layerConfig.forEach(({ key, layer }) => {
      layer.setVisible(visibility[key as keyof typeof visibility]);
    });
  }, [visibility]);

  return (
      <>
        <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />

        <LayerToggle
            visibility={visibility}
            setVisibility={setVisibility}
        />

        <div ref={overlayRef} className="overlay">
          {selectedFeature && (
              <>
                <strong>{selectedFeature.get("kompleksnavn")}</strong>
                <br />
                Eier: {selectedFeature.get("eierstatus2")}
                <br />
                Drift: {selectedFeature.get("driftsenhetsnavn")}
              </>
          )}
        </div>
      </>
  );
}
