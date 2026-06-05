export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value)
}

export const calculateAffordability = (
  grossAnnualIncome: number,
  monthlyDebt: number,
  downPayment: number,
  interestRate: number,
  propertyTax: number,
  hoaFee: number,
  loanTerm: number = 360
): { maxPrice: number; monthlyPayment: number } => {
  const monthlyIncome = grossAnnualIncome / 12
  
  const frontEndMax = monthlyIncome * 0.28
  const backEndMax = monthlyIncome * 0.36
  const maxMonthlyPayment = Math.min(frontEndMax - monthlyDebt, backEndMax - monthlyDebt)

  const monthlyRate = interestRate / 100 / 12
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, loanTerm)
  const denominator = Math.pow(1 + monthlyRate, loanTerm) - 1
  const mortgagePaymentPerDollar = numerator / denominator

  const maxLoanAmount = maxMonthlyPayment / (mortgagePaymentPerDollar + propertyTax / 12 + hoaFee / 12)
  const maxPrice = maxLoanAmount / (1 - downPayment / 100)

  return {
    maxPrice: Math.round(maxPrice),
    monthlyPayment: Math.round(maxMonthlyPayment),
  }
}

export const calculateMonthlyPayment = (
  loanAmount: number,
  interestRate: number,
  loanTerm: number = 360,
  propertyTax: number = 0,
  hoaFee: number = 0
): number => {
  const monthlyRate = interestRate / 100 / 12
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, loanTerm)
  const denominator = Math.pow(1 + monthlyRate, loanTerm) - 1
  const principalInterest = loanAmount * (numerator / denominator)

  return Math.round(principalInterest + propertyTax / 12 + hoaFee)
}