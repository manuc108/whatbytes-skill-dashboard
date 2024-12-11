export default function SyllabusAnalysis() {
  const topics = [
    { name: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
    { name: "Tags & References in HTML", progress: 60, color: "bg-orange-500" },
    { name: "Tables & References in HTML", progress: 24, color: "bg-red-500" },
    { name: "Tables & CSS Basics", progress: 96, color: "bg-green-500" },
  ]

  return (
    <div className="bg-white rounded-lg border p-6 min-h-[440px]">
      <h2 className="text-lg font-semibold mb-6">Syllabus Wise Analysis</h2>
      <div className="space-y-12">
        {topics.map((topic, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-600">{topic.name}</span>
              <span className={`font-medium ${
                topic.color === 'bg-blue-500' ? 'text-blue-600' :
                topic.color === 'bg-orange-500' ? 'text-orange-600' :
                topic.color === 'bg-red-500' ? 'text-red-600' :
                'text-green-600'
              }`}>{topic.progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${topic.color} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${topic.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

