'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Search, Heart, Calculator, FileText, ClipboardList, MessageSquare, Users } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/search', label: 'Search', icon: Search },
    { href: '/saved', label: 'Saved', icon: Heart },
    { href: '/calculator', label: 'Calculator', icon: Calculator },
    { href: '/notes', label: 'Notes', icon: MessageSquare },
    { href: '/documents', label: 'Documents', icon: FileText },
    { href: '/checklist', label: 'Checklist', icon: ClipboardList },
    { href: '/contacts', label: 'Contacts', icon: Users },
  ]

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Home className="w-6 h-6 text-blue-600" />
            <span>HomePath</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="border-t border-gray-200 bg-white">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-light-bg transition-smooth border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex-col p-6 z-40">
        <Link href="/" className="flex items-center gap-2 mb-12 font-bold text-xl">
          <Home className="w-6 h-6 text-blue-600" />
          <span>HomePath</span>
        </Link>

        <nav className="flex-1 space-y-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-light-bg transition-smooth font-medium"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-200 pt-4 text-xs text-gray-600">
          <p>Version 0.1.0</p>
        </div>
      </aside>

      {/* Content offset on desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          :root {
            --sidebar-width: 16rem;
          }
        }
      `}</style>
    </>
  )
}