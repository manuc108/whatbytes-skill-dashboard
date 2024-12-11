export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="chart-container">{children}</div>;
};

export const ChartTooltip = ({ data }: { data: any }) => {
    return <div className="chart-tooltip">Tooltip: {data}</div>;
};
