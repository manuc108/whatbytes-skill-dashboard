"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface UpdateScoresDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpdate: (scores: {
    rank: number
    percentile: number
    currentScore: number
  }) => void
  initialScores: {
    rank: number
    percentile: number
    currentScore: number
  }
}

export function UpdateScoresDialog({
  open,
  onOpenChange,
  onUpdate,
  initialScores,
}: UpdateScoresDialogProps) {
  const [scores, setScores] = useState(initialScores)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] gap-8">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Update scores</DialogTitle>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="h-12 w-12"
            />
          </div>
        </DialogHeader>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">
              1
            </div>
            <div className="flex-1 space-y-2.5">
              <label className="text-lg font-semibold">
                Update your <span className="font-bold">Rank</span>
              </label>
              <Input
                type="number"
                value={scores.rank}
                className="h-12 text-lg border-[#1E3A8A]/20"
                onChange={(e) =>
                  setScores((prev) => ({ ...prev, rank: Number(e.target.value) }))
                }
              />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">
              2
            </div>
            <div className="flex-1 space-y-2.5">
              <label className="text-lg font-semibold">
                Update your <span className="font-bold">Percentile</span>
              </label>
              <Input
                type="number"
                value={scores.percentile}
                className="h-12 text-lg border-[#1E3A8A]/20"
                onChange={(e) =>
                  setScores((prev) => ({
                    ...prev,
                    percentile: Number(e.target.value),
                  }))
                }
              />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">
              3
            </div>
            <div className="flex-1 space-y-2.5">
              <label className="text-lg font-semibold">
                Update your <span className="font-bold">Current Score (out of 15)</span>
              </label>
              <Input
                type="number"
                value={scores.currentScore}
                className="h-12 text-lg border-[#1E3A8A]/20"
                onChange={(e) =>
                  setScores((prev) => ({
                    ...prev,
                    currentScore: Number(e.target.value),
                  }))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="h-12 px-6 text-base font-medium"
          >
            cancel
          </Button>
          <Button
            onClick={() => onUpdate(scores)}
            className="h-12 px-6 text-base font-medium bg-[#1E3A8A] hover:bg-[#1E3A8A]/90"
          >
            save <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

