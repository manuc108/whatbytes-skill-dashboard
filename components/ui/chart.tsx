import React from "react";

export const ChartContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="chart-container">{children}</div>;
};

interface ChartTooltipProps {
    data: string | number;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ data }) => {
    return <div className="chart-tooltip">Tooltip: {data}</div>;
};

