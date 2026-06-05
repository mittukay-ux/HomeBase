'use client'

import React, { useState } from 'react'
import { Navigation } from '@/components'
import { mockProperties } from '@/data/mock'
import { MessageSquare, Plus, Trash2 } from 'lucide-react'

interface PropertyNote {
  id: string
  propertyId: string
  content: string
  createdAt: string
}

export default function NotesPage() {
  const [selectedProperty, setSelectedProperty] = useState(mockProperties[0])
  const [notes, setNotes] = useState<PropertyNote[]>([
    {
      id: '1',
      propertyId: '1',
      content: 'Great location near public transport. Walking distance to shops and restaurants. The neighborhood has good schools.',
      createdAt: '2024-01-10',
    },
    {
      id: '2',
      propertyId: '1',
      content: 'Need to check if property allows pets. Ask about recent renovations and inspector reports.',
      createdAt: '2024-01-09',
    },
  ])
  const [newNote, setNewNote] = useState('')

  const propertyNotes = notes.filter((n) => n.propertyId === selectedProperty.id)

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: Math.random().toString(),
          propertyId: selectedProperty.id,
          content: newNote,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ])
      setNewNote('')
    }
  }

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-light-bg md:ml-64 pt-20 md:pt-0">
      <Navigation />
      
      <div className="container-max py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Notes</h1>
          <p className="text-gray-600">Keep personal notes and thoughts about each property</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Properties List */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Properties</h3>
            <div className="space-y-2">
              {mockProperties.map((property) => (
                <button
                  key={property.id}
                  onClick={() => setSelectedProperty(property)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-smooth ${
                    selectedProperty.id === property.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <p className="font-medium text-sm">{property.address}</p>
                  <p className={`text-xs ${selectedProperty.id === property.id ? 'text-blue-100' : 'text-gray-600'}`}>
                    {property.city}, {property.state}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Notes Section */}
          <div className="lg:col-span-3">
            {/* Property Header */}
            <div className="bg-white rounded-lg p-6 card-shadow mb-6">
              <div className="flex items-start gap-4">
                <img
                  src={selectedProperty.imageUrl}
                  alt={selectedProperty.address}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProperty.address}</h3>
                  <p className="text-gray-600">
                    {selectedProperty.city}, {selectedProperty.state} {selectedProperty.zipCode}
                  </p>
                  <p className="text-lg font-bold text-blue-600 mt-2">
                    ${(selectedProperty.price / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
            </div>

            {/* Add Note Section */}
            <div className="bg-white rounded-lg p-6 card-shadow mb-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Note
              </h4>
              <div className="space-y-4">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Write your notes here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                />
                <button
                  onClick={handleAddNote}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-smooth"
                >
                  Save Note
                </button>
              </div>
            </div>

            {/* Notes List */}
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Notes ({propertyNotes.length})
              </h4>

              {propertyNotes.length > 0 ? (
                <div className="space-y-4">
                  {propertyNotes.map((note) => (
                    <div key={note.id} className="bg-white rounded-lg p-4 card-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-gray-900 mb-2">{note.content}</p>
                          <p className="text-xs text-gray-600">
                            {new Date(note.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-smooth ml-4 flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-12 text-center card-shadow">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No notes yet</p>
                  <p className="text-gray-500 text-sm mt-2">Add notes to track your thoughts about this property</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}