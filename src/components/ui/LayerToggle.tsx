import React from "react";
import {Layer} from "ol/layer.js";
import type TileLayer from "ol/layer/Tile.js";
import {arcticLayer} from "../map/arcticMap.js";

type Props = {
    visibility: Record<string, boolean>;
    setVisibility: React.Dispatch<React.SetStateAction<any>>;
    osmLayer: TileLayer;
    satellittLayer: TileLayer;
    arcticLayer: TileLayer;
};

export function LayerToggle({ visibility, setVisibility, osmLayer, satellittLayer }: Props) {
    return (
        <div className="toggle">
            <h3>Bakgrunnskart</h3>
            <div>
                <button onClick={() => {
                    osmLayer.setVisible(true);
                    satellittLayer.setVisible(false);
                    arcticLayer.setVisible(false);
                }}>OSM
                </button>
                <button onClick={() => {
                    osmLayer.setVisible(false);
                    satellittLayer.setVisible(true);
                    arcticLayer.setVisible(false);
                }}>Satellitt
                </button>
                <button onClick={() => {
                    osmLayer.setVisible(false);
                    satellittLayer.setVisible(false);
                    arcticLayer.setVisible(true);
                }}>Arctic Layer
                </button>

            </div>
            <hr/>
            {Object.entries(visibility).map(([key, value]) => (
                <label key={key}>
                    <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                            setVisibility((prev: any) => ({
                                ...prev,
                                [key]: e.target.checked,
                            }))
                        }
                    />
                    {key}
                </label>
            ))}
        </div>
    );
}
