import React, { useEffect, useRef, useState, useMemo } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import {OSM, XYZ} from "ol/source.js";
import Overlay from "ol/Overlay.js";
import type { FeatureLike } from "ol/Feature.js";
import { useGeographic } from "ol/proj.js";
import {overviewMapControl} from "../map/mapOverviewConfig.js";
import {defaults as defaultControls} from 'ol/control/defaults.js';
import { arcticLayer } from "../map/arcticMap.js";

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

const osmLayer = new TileLayer({ source: new OSM() });
const satellittLayer = new TileLayer({ source: new XYZ({
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  }),
  visible: false,
});

const map = new Map({
  controls: defaultControls().extend([overviewMapControl]),
  view: new View({ center: [11, 60], zoom: 8 }),
  layers: [
    osmLayer,
    satellittLayer,
      arcticLayer,
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
    Kommuner: false,
    Statsbeskyttet_områder: false,
    Fiskehavner: false,
    Friluftsområder_vernede: false,
    Hummerområder_fredet: false,
    Fartsrestriksjoner: false,
  });

  const layerConfig = [
    { key: "Kommuner", layer: kommuneLayer },
    { key: "Statsbeskyttet_områder", layer: stateProtectedAreasLayer },
    { key: "Fiskehavner", layer: fiskehavnerLayer },
    { key: "Friluftsområder_vernede", layer: friluftLayer },
    { key: "Hummerområder_fredet", layer: hummerLayer },
    { key: "Fartsrestriksjoner", layer: fartrestLayer },
  ];

  const overlay = useMemo(
      () =>
          new Overlay({
            positioning: "bottom-center",
          }),
      []
  );

  const layers = [
    hummerLayer,
    kommuneLayer,
    stateProtectedAreasLayer,
    friluftLayer,
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
      layers: [...clickableLayers, fiskehavnerLayer],
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
            osmLayer={osmLayer}
            satellittLayer={satellittLayer}
            arcticLayer={arcticLayer}
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
