import React from "react";

export const ChartTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`Value: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};
