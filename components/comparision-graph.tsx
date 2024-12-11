"use client"

import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartSpline } from "lucide-react"

const data = [
  { x: 0, value: 5 },
  { x: 25, value: 10 },
  { x: 50, value: 80 },
  { x: 75, value: 40 },
  { x: 90, value: 20 },
  { x: 100, value: 5 },
]

interface ComparisonGraphProps {
  percentile: number
}

export function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 100]}
            tickCount={5}
            label={{ value: "Percentile", position: "bottom" }}
          />
          <YAxis hide />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border rounded-lg shadow-sm flex items-center space-x-2">
                    <div className="p-2 bg-yellow-50 rounded-full">
                      <ChartSpline className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div className="text-sm">
                      <div className="font-bold">Percentile: {payload[0].payload.x}</div>
                      <div className="text-gray-500">
                        numberOfStudent: {payload[0].payload.value}
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ fill: "#4F46E5", r: 4 }}
          />
          {/* Vertical line for current percentile */}
          <Line
            type="monotone"
            data={[
              { x: percentile, value: 0 },
              { x: percentile, value: 80 },
            ]}
            stroke="#4F46E5"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
