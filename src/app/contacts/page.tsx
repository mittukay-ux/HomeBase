'use client'

import React, { useState } from 'react'
import { Navigation, ContactCard } from '@/components'
import { mockContacts } from '@/data/mock'
import { Users, Plus } from 'lucide-react'

export default function ContactsPage() {
  const [contacts] = useState(mockContacts)
  const [activeRole, setActiveRole] = useState<string | null>(null)

  const roles = ['Agent', 'Lender', 'Attorney', 'Inspector']

  const filteredContacts = activeRole
    ? contacts.filter((c) => c.role === activeRole)
    : contacts

  return (
    <div className="min-h-screen bg-light-bg md:ml-64 pt-20 md:pt-0">
      <Navigation />
      
      <div className="container-max py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacts</h1>
            <p className="text-gray-600">Manage your real estate team and advisors</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-smooth">
            <Plus className="w-5 h-5" />
            Add Contact
          </button>
        </div>

        {/* Role Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveRole(null)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-smooth ${
              activeRole === null
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            All ({contacts.length})
          </button>
          {roles.map((role) => {
            const count = contacts.filter((c) => c.role === role).length
            return (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-smooth ${
                  activeRole === role
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {role} ({count})
              </button>
            )
          })}
        </div>

        {/* Contacts Grid */}
        {filteredContacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center card-shadow">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No contacts found</p>
            <p className="text-gray-500 text-sm mt-2">Add your first contact to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}