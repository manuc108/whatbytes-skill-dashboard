import { Target } from 'lucide-react'

interface QuestionAnalysisProps {
  score: number
}

export default function QuestionAnalysis({ score }: QuestionAnalysisProps) {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Question Analysis</h2>
        <span className="text-blue-600 font-semibold">{score}/15</span>
      </div>
      <p className="text-gray-500 mb-6">
        <span className="font-bold">You scored {score} question correct out of 15. </span> 
        However, it still needs some improvements.
      </p>

      <div className="flex justify-center">
        <div className="relative h-64 w-64">
          <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 256 256">
            <circle
              cx="128"
              cy="128"
              r="120"
              className="stroke-gray-100"
              fill="none"
              strokeWidth="12"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              className="stroke-blue-500"
              fill="none"
              strokeWidth="12"
              strokeDasharray={2 * Math.PI * 120}
              strokeDashoffset={2 * Math.PI * 120 * (1 - score / 15)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Target className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

