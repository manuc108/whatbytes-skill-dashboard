import React from "react";
import { TooltipProps } from "recharts";

interface ChartTooltipData {
  value: number;
}

export const ChartTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload as ChartTooltipData;
        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`Value: ${data.value}`}</p>
            </div>
        );
    }

    return null;
};

