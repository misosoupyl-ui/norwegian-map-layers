import React, { useEffect, useRef, useState, useMemo } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source.js";
import Overlay from "ol/Overlay.js";
import type { FeatureLike } from "ol/Feature.js";
import { useGeographic } from "ol/proj.js";

import "ol/ol.css";

import {stateProtectedAreasLayer} from "../layers/stateProtectedAreas/stateProtectedAreasLayers.js";
import {fiskehavnerLayer} from "../layers/fiskehavner/fiskehavner.js";
import {friluftLayer} from "../layers/friluft/friluft.js";
import {hummerLayer} from "../layers/hummer/hummer.js";
import {kommuneLayer} from "../layers/kommune/kommune.js";
import {nedgravdeContainereLayer} from "../layers/nedgravdeContainere/nedgravdeContainere.js";
import { attachClick } from "../layers/interactions/click.js";
import {fartrestLayer} from "../layers/fartRestrikt/fartrestrikt.js";

import "./application.css";

useGeographic();

const map = new Map({
  view: new View({ center: [11, 60], zoom: 8 }),
  layers: [new TileLayer({ source: new OSM() }),
    kommuneLayer,
    stateProtectedAreasLayer,
    fiskehavnerLayer,
    friluftLayer,
    hummerLayer,
    nedgravdeContainereLayer,
    fartrestLayer,
  ],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [selectedFeature, setSelectedFeature] =
      useState<FeatureLike | null>(null);

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
    fiskehavnerLayer,
    friluftLayer,
    hummerLayer,
    nedgravdeContainereLayer,
  ];


  useEffect(() => {
    map.setTarget(mapRef.current!);

    overlay.setElement(overlayRef.current!);
    map.addOverlay(overlay);

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

  return (
      <>
        <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />

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
