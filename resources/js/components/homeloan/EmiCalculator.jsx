"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function EmiCalculator() {
  const [amount, setAmount] = useState(100000) // Default 1 lakh
  const [interestRate, setInterestRate] = useState(9) // Default 9%
  const [duration, setDuration] = useState(1) // Default 1 year
  const [durationType, setDurationType] = useState("Years")
  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // Quick amount selection options
  const amountOptions = [
    { label: "50L", value: 5000000 },
    { label: "1Cr", value: 10000000 },
    { label: "5Cr", value: 50000000 },
    { label: "20Cr", value: 200000000 },
    { label: "30Cr", value: 300000000 },
  ]

  // Duration options for slider
  const durationOptions = [
    { label: "1Y", value: 1 },
    { label: "10Y", value: 10 },
    { label: "15Y", value: 15 },
    { label: "25Y", value: 25 },
    { label: "30Y", value: 30 },
  ]

  // Format amount in Indian currency format
  const formatAmount = (num) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num)
  }

  // Convert amount to readable format (Lakh/Crore)
  const getAmountLabel = (amount) => {
    if (amount >= 10000000) {
      return `${(amount / 10000000).toFixed(2)} Crore`
    } else if (amount >= 100000) {
      return `${(amount / 100000).toFixed(2)} Lakh`
    }
    return amount.toString()
  }

  // Calculate EMI
  const calculateEMI = () => {
    const principal = amount
    const monthlyRate = interestRate / (12 * 100)
    const months = durationType === "Years" ? duration * 12 : duration

    if (monthlyRate === 0) {
      const monthlyEMI = principal / months
      setEmi(monthlyEMI)
      setTotalInterest(0)
      setTotalAmount(principal)
      return
    }

    const emiAmount =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

    const totalAmountPayable = emiAmount * months
    const totalInterestPayable = totalAmountPayable - principal

    setEmi(emiAmount)
    setTotalInterest(totalInterestPayable)
    setTotalAmount(totalAmountPayable)
  }

  // Recalculate EMI when inputs change
  useEffect(() => {
    calculateEMI()
  }, [amount, interestRate, duration, durationType])

  const handleAmountChange = (e) => {
    const value = Number.parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0
    if (value >= 100000 && value <= 300000000) {
      setAmount(value)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600 p-4 pb-28">
        <div className="text-center text-white py-10">
            <h2 className="text-2xl md:text-3xl font-bold">Calculate Home Loan EMI</h2>
            <p className="text-sm font-bold mt-3">Use our home loan EMI calculator, input the loan amount, the rate of interest and the loan tenure.</p>
        </div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-8">
              EMI Calculator - Calculate Home Loan EMI
            </h1>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Panel - input Controls */}
              <div className="space-y-8">
                {/* Amount Section */}
                <div>
                  <label className="text-lg font-semibold text-gray-700 mb-4 block">Amount</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formatAmount(amount)}
                      onChange={handleAmountChange}
                      className="text-xl w-full font-semibold h-14 bg-gray-100 border-lg text-gray-800"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{getAmountLabel(amount)}</p>

                  {/* Quick Amount Selection */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {amountOptions.map((option) => (
                      <button
                        key={option.label}
                        variant="outline"
                        size="sm"
                        onClick={() => setAmount(option.value)}
                        className={`text-sm px-2 py-1 rounded-full hove:bg-gray-100 ${amount === option.value ? "bg-orange-100 border-orange-300" : ""}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interest Rate Section */}
                <div>
                  <label className="text-lg font-semibold text-gray-700 mb-4 block">
                    Illustrative Interest Rate (p.a.)*
                  </label>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-xl font-semibold text-gray-800 mb-4">{interestRate}%</div>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number.parseFloat(e.target.value))}
                        className="w-full h-2 bg-yellow-400 rounded-lg appearance-none cursor-pointer slider"
                      />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span className="cursor-pointer" onClick={()=>{setInterestRate(1)}} >1%</span>
                      <span className="cursor-pointer" onClick={()=>{setInterestRate(5)}}>5%</span>
                      <span className="cursor-pointer" onClick={()=>{setInterestRate(10)}}>10%</span>
                      <span className="cursor-pointer" onClick={()=>{setInterestRate(15)}}>15%</span>
                      <span className="cursor-pointer" onClick={()=>{setInterestRate(20)}}>20%</span>
                    </div>
                  </div>
                </div>

                {/* Duration Section */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <label className="text-lg font-semibold text-gray-700">Duration</label>
                    {/* <div className="flex bg-gray-200 rounded-lg p-1">
                      <button
                        size="sm"
                        variant={durationType === "Months" ? "default" : "ghost"}
                        onClick={() => setDurationType("Months")}
                        className={`${durationType === "Months" ? "bg-white shadow-sm" : ""}`}
                      >
                        Months
                      </button>
                      <button
                        size="sm"
                        variant={durationType === "Years" ? "default" : "ghost"}
                        onClick={() => setDurationType("Years")}
                        className={`${durationType === "Years" ? "bg-orange-500 text-white" : ""}`}
                      >
                        Years
                      </button>
                    </div> */}
                  </div>

                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-xl font-semibold text-gray-800 mb-4">
                      {duration} {durationType === "Years" ? "Year" : "Month"}
                      {duration > 1 ? "s" : ""}
                    </div>
                    
                    <input
                        type="range"
                        min="1"
                        max={durationType === "Years" ? 30 : 360}
                        step="1"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full h-2 bg-yellow-400 rounded-lg appearance-none cursor-pointer slider"
                      />
                    {durationType === "Years" && (
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        {durationOptions.map((option) => (
                          <span key={option.label} className="cursor-pointer" onClick={()=>setDuration(option.value)}>{option.label}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Panel - Results */}
              <div className="bg-orange-50 rounded-xl p-6 space-y-6">
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-2">Monthly EMI</p>
                  <p className="text-4xl md:text-5xl font-bold text-orange-600">{formatAmount(emi)}*</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="text-gray-600">Principal Amount</span>
                    <span className="font-semibold text-gray-800">{formatAmount(amount)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-orange-200">
                    <span className="text-gray-600">Total Interest Payable</span>
                    <span className="font-semibold text-gray-800">{formatAmount(totalInterest)}*</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Total Amount Payable</span>
                    <span className="font-semibold text-gray-800">{formatAmount(totalAmount)}*</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  
                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg">
                      <Link to="/home-loan">
                      APPLY NOW
                      </Link>
                    
                  </button>
                  <button
                    variant="outline"
                    className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 rounded-lg"
                  >
                    KNOW MORE
                  </button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8 italic">
              *For representation purpose only. Final values may vary subject to bank's policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
