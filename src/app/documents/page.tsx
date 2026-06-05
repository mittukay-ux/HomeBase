'use client'

import React from 'react'
import { Navigation } from '@/components'
import { FileText, Upload, FolderOpen, Download, Trash2 } from 'lucide-react'
import { mockDocuments } from '@/data/mock'

export default function DocumentsPage() {
  const [documents] = React.useState(mockDocuments)
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const categories = ['Financial', 'Property', 'Legal', 'Insurance', 'Other']

  const filteredDocs = selectedCategory
    ? documents.filter((d) => d.category === selectedCategory)
    : documents

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Financial: 'bg-green-100 text-green-700',
      Property: 'bg-blue-100 text-blue-700',
      Legal: 'bg-purple-100 text-purple-700',
      Insurance: 'bg-orange-100 text-orange-700',
      Other: 'bg-gray-100 text-gray-700',
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-light-bg md:ml-64 pt-20 md:pt-0">
      <Navigation />
      
      <div className="container-max py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Documents</h1>
            <p className="text-gray-600">Store and organize important homebuying documents</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-smooth">
            <Upload className="w-5 h-5" />
            Upload Document
          </button>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300 hover:border-blue-500 transition-smooth mb-8 text-center cursor-pointer">
          <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-900 font-semibold mb-1">Drop documents here or click to upload</p>
          <p className="text-gray-600 text-sm">Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG</p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-smooth ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            All ({documents.length})
          </button>
          {categories.map((category) => {
            const count = documents.filter((d) => d.category === category).length
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-smooth ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category} ({count})
              </button>
            )
          })}
        </div>

        {/* Documents Table */}
        {filteredDocs.length > 0 ? (
          <div className="bg-white rounded-lg overflow-hidden card-shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Document Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Uploaded
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDocs.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-200 hover:bg-gray-50 transition-smooth">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <p className="font-medium text-gray-900">{doc.name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${getCategoryColor(doc.category)}`}>
                          {doc.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(doc.uploadedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-smooth">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-smooth">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center card-shadow">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No documents found</p>
            <p className="text-gray-500 text-sm mt-2">Start uploading documents to organize them here</p>
          </div>
        )}
      </div>
    </div>
  )
}