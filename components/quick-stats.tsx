import { Trophy, CheckCircle, PercentCircle } from 'lucide-react'

interface QuickStatsProps {
  scores: {
    rank: number
    percentile: number
    currentScore: number
  }
}

export default function QuickStats({ scores }: QuickStatsProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Quick Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rank */}
        <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
          <div className="p-3 bg-yellow-100 rounded-full">
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{scores.rank}</div>
            <div className="text-sm text-gray-500 uppercase">YOUR RANK</div>
          </div>
        </div>

        {/* Percentile */}
        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-3 bg-blue-100 rounded-full">
            <PercentCircle className="h-8 w-8 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{scores.percentile}%</div>
            <div className="text-sm text-gray-500 uppercase">PERCENTILE</div>
          </div>
        </div>

        {/* Correct Answers */}
        <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
          <div className="p-3 bg-green-100 rounded-full">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{scores.currentScore}/15</div>
            <div className="text-sm text-gray-500 uppercase">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  )
}
