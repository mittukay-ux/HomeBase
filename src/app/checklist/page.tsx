'use client'

import React, { useState } from 'react'
import { Navigation, ChecklistItem } from '@/components'
import { mockChecklist } from '@/data/mock'
import { CheckCircle2 } from 'lucide-react'

const stages = ['Financial Preparation', 'Pre-Approval', 'Home Search', 'Offer', 'Inspection', 'Closing'] as const

export default function ChecklistPage() {
  const [checklist, setChecklist] = useState(mockChecklist)

  const toggleItem = (id: string) => {
    setChecklist(
      checklist.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    )
  }

  const getProgress = () => {
    const completed = checklist.filter((item) => item.completed).length
    return Math.round((completed / checklist.length) * 100)
  }

  return (
    <div className="min-h-screen bg-light-bg md:ml-64 pt-20 md:pt-0">
      <Navigation />
      
      <div className="container-max py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Homebuying Checklist</h1>
          <p className="text-gray-600">Track your progress through each stage of the homebuying journey</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-6 card-shadow mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Overall Progress</h3>
            <span className="text-2xl font-bold text-blue-600">{getProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
        </div>

        {/* Checklist by Stage */}
        <div className="space-y-8">
          {stages.map((stage) => {
            const stageItems = checklist.filter((item) => item.stage === stage)
            const stageProgress = stageItems.length > 0
              ? Math.round(
                (stageItems.filter((item) => item.completed).length / stageItems.length) * 100
              )
              : 0

            return (
              <div key={stage} className="bg-white rounded-lg overflow-hidden card-shadow">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-l-4 border-blue-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{stage}</h3>
                      <p className="text-sm text-gray-600 mt-1">{stageProgress}% complete</p>
                    </div>
                    {stageProgress === 100 && (
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    )}
                  </div>
                  <div className="mt-3 bg-white rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-2 transition-all duration-300"
                      style={{ width: `${stageProgress}%` }}
                    />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {stageItems.map((item) => (
                    <ChecklistItem
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      completed={item.completed}
                      dueDate={item.dueDate}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Resources Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Need Help?</h3>
          <p className="text-blue-800 mb-4">
            Check out our guides and resources to learn more about each stage of the homebuying process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-50 transition-smooth">
              View Guides
            </button>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-50 transition-smooth">
              Contact Support
            </button>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-50 transition-smooth">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}