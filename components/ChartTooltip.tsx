import React from "react";
import { TooltipProps } from "recharts";

export const ChartTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`Value: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};


