import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source.js";
import { useGeographic } from "ol/proj.js";

import "ol/ol.css";
import {stateProtectedAreasLayer} from "../layers/stateProtectedAreas/stateProtectedAreasLayers.js";
import {kommuneLayer} from "../layers/kommune/kommune.js";
import {fiskehavnerLayer} from "../layers/fiskehavner/fiskehavner.js";
import {friluftLayer} from "../layers/friluft/friluft.js";
import {hummerLayer} from "../layers/hummer/hummer.js";

useGeographic();

const map = new Map({
  view: new View({ center: [11, 60], zoom: 8 }),
  layers: [new TileLayer({ source: new OSM() }),
  stateProtectedAreasLayer,
    kommuneLayer,
    fiskehavnerLayer,
    friluftLayer,
    hummerLayer
  ],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    map.setTarget(mapRef.current!);
  }, []);

  return <div ref={mapRef}></div>;
}
