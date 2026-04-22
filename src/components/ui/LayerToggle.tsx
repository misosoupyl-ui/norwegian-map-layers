import React from "react";

type Props = {
    visibility: Record<string, boolean>;
    setVisibility: React.Dispatch<React.SetStateAction<any>>;
};

export function LayerToggle({ visibility, setVisibility }: Props) {
    return (
        <div className="toggle">
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
