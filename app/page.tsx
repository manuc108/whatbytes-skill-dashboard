"use client"

import { useState } from "react"
import SidebarNav from "@/components/sidebar-nav"
import QuickStats from "@/components/quick-stats"
import SyllabusAnalysis from "@/components/syllabus-analysis"
import QuestionAnalysis from "@/components/question-analysis"
import { Button } from "@/components/ui/button"
import { UpdateScoresDialog } from "@/components/update-scores-dialog"
import UserProfile from "@/components/user-profile"
import { ComparisonGraph } from "@/components/comparision-graph"

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [scores, setScores] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 10,
  })

  const handleUpdateScores = (newScores: {
    rank: number
    percentile: number
    currentScore: number
  }) => {
    setScores(newScores)
    setDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation  */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 flex items-center justify-between px-8">
        <div className="font-bold text-2xl flex items-center gap-2">
          <span className="text-2xl">|||</span> WhatBytes
        </div>
        <UserProfile
          name="Rahil Siddique"
          image="https://github.com/shadcn.png"
        />
      </header>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row pt-16">
        <SidebarNav />
        
        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,440px] gap-6 p-6">
            {/* Left Column (Main Content) */}
            <div>
              <h1 className="text-xl font-medium text-gray-700 mb-6">Skill Test</h1>
              
              {/* HTML Test Header */}
              <div className="bg-white rounded-lg border p-4 mb-6 flex flex-wrap items-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="h-12 w-12"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    Hyper Text Markup Language
                  </h2>
                  
                  <p className="text-sm text-gray-500">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
                <Button 
                  onClick={() => setDialogOpen(true)}
                  className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90"
                >
                  Update
                </Button>
              </div>

              {/* Quick Stats */}
              <QuickStats scores={scores} />

              {/* Comparison Graph */}
              <div className="bg-white rounded-lg border p-4 mt-6 flex flex-col justify-between" style={{ minHeight: "200px" }}>
                <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
                <p className="text-gray-500 mb-4">
                  <span className="font-bold">You scored {scores.percentile}% percentile </span> 
                  which is lower than the average percentile 72% of all the engineers who took this assessment
                </p>
                <ComparisonGraph percentile={scores.percentile} />
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4 flex flex-col justify-between mt-6 lg:mt-14" style={{ minHeight: "400px" }}>
              <SyllabusAnalysis />
              <QuestionAnalysis score={scores.currentScore} />
            </div>
          </div>
        </main>
      </div>

      <UpdateScoresDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onUpdate={handleUpdateScores}
        initialScores={scores}
      />
    </div>
  )
}