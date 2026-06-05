'use client'

import React, { useState } from 'react'
import { Navigation } from '@/components'
import { formatCurrency, calculateAffordability, calculateMonthlyPayment } from '@/lib/utils'
import { DollarSign, Home } from 'lucide-react'

export default function AffordabilityCalculatorPage() {
  const [income, setIncome] = useState(120000)
  const [monthlyDebt, setMonthlyDebt] = useState(0)
  const [downPayment, setDownPayment] = useState(20)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTax, setPropertyTax] = useState(150)
  const [hoaFee, setHoaFee] = useState(0)
  const [loanTerm, setLoanTerm] = useState(360)

  const affordability = calculateAffordability(
    income,
    monthlyDebt,
    downPayment,
    interestRate,
    propertyTax,
    hoaFee,
    loanTerm
  )

  const monthlyPayment = calculateMonthlyPayment(
    affordability.maxPrice * (1 - downPayment / 100),
    interestRate,
    loanTerm,
    propertyTax,
    hoaFee
  )

  const downPaymentAmount = affordability.maxPrice * (downPayment / 100)

  return (
    <div className="min-h-screen bg-light-bg md:ml-64 pt-20 md:pt-0">
      <Navigation />
      
      <div className="container-max py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Affordability Calculator</h1>
          <p className="text-gray-600">Determine how much home you can afford</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Income Section */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Income & Debt</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gross Annual Income
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-600 mt-1">Monthly: {formatCurrency(income / 12)}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Debt Obligations
                  </label>
                  <input
                    type="number"
                    value={monthlyDebt}
                    onChange={(e) => setMonthlyDebt(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-600 mt-1">Car loans, credit cards, student loans, etc.</p>
                </div>
              </div>
            </div>

            {/* Mortgage Section */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Mortgage Details</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Down Payment %
                    </label>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      min="5"
                      max="50"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interest Rate %
                    </label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      step="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Term (months)
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={360}>30 years (360 months)</option>
                    <option value={300}>25 years (300 months)</option>
                    <option value={240}>20 years (240 months)</option>
                    <option value={180}>15 years (180 months)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Expenses Section */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Additional Costs</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Annual Property Tax
                    </label>
                    <input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-600 mt-1">Monthly: {formatCurrency(propertyTax / 12)}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Monthly HOA Fee
                    </label>
                    <input
                      type="number"
                      value={hoaFee}
                      onChange={(e) => setHoaFee(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 card-shadow sticky top-4">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Your Results</h3>

              <div className="space-y-6">
                {/* Max Price */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-blue-700 font-medium mb-2">Maximum Home Price</p>
                  <p className="text-3xl font-bold text-blue-900">{formatCurrency(affordability.maxPrice)}</p>
                </div>

                {/* Down Payment */}
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-600 mb-2">Down Payment ({downPayment}%)</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(downPaymentAmount)}</p>
                </div>

                {/* Loan Amount */}
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-600 mb-2">Loan Amount</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(affordability.maxPrice - downPaymentAmount)}
                  </p>
                </div>

                {/* Monthly Payment */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-green-700 font-medium mb-2">Estimated Monthly Payment</p>
                  <p className="text-3xl font-bold text-green-900">{formatCurrency(monthlyPayment)}</p>
                  <p className="text-xs text-green-700 mt-2">Includes principal, interest, taxes & HOA</p>
                </div>

                {/* Max Monthly Payment */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Max Monthly Payment</p>
                  <p className="text-lg font-semibold text-gray-900">{formatCurrency(affordability.monthlyPayment)}</p>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-smooth">
                Search Homes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}