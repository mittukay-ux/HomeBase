'use client'

import React from 'react'
import { PropertyCard, ChecklistItem, ContactCard } from '@/components'
import { mockProperties, mockChecklist, mockContacts } from '@/data/mock'
import { TrendingUp, Home, CheckCircle2, Calendar } from 'lucide-react'

export default function Dashboard() {
  const savedHomesCount = 3
  const checklistProgress = 33
  const upcomingOpenHouses = 2

  return (
    <div className="min-h-screen bg-light-bg md:ml-64 pt-20 md:pt-0">
      <div className="container-max py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back to HomePath</h1>
          <p className="text-gray-600">Track your homebuying journey from start to finish</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Saved Homes</p>
                <p className="text-3xl font-bold text-gray-900">{savedHomesCount}</p>
              </div>
              <Home className="w-10 h-10 text-blue-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Checklist Progress</p>
                <p className="text-3xl font-bold text-gray-900">{checklistProgress}%</p>
              </div>
              <CheckCircle2 className="w-10 h-10 text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Open Houses</p>
                <p className="text-3xl font-bold text-gray-900">{upcomingOpenHouses}</p>
              </div>
              <Calendar className="w-10 h-10 text-orange-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Applications</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <TrendingUp className="w-10 h-10 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommended Properties */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockProperties.slice(0, 4).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Recent Checklist Items */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Checklist</h2>
            <div className="space-y-3">
              {mockChecklist.slice(0, 3).map((item) => (
                <ChecklistItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  dueDate={item.dueDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}