"use client"

import { Target, ArrowDown } from 'lucide-react'

interface RadialProgressProps {
  value: number
  max: number
}

export function RadialProgress({ value , max }: RadialProgressProps) {
  const radius = 80 
  const circumference = 2 * Math.PI * radius
  const percentage = (value / max) * 100
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative h-64 w-64">
      <svg
        className="h-full w-full -rotate-90 transform"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          className="stroke-muted"
          fill="none"
          strokeWidth="24"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          className="stroke-primary"
          fill="none"
          strokeWidth="24"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
        <Target className="h-8 w-8 text-primary" />
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </div>
  )
}
