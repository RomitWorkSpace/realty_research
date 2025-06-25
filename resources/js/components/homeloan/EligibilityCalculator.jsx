import { useState, useEffect } from "react"

export default function EligibilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(100000)
  const [existingEMI, setExistingEMI] = useState(50000)
  const [interestRate, setInterestRate] = useState(9)
  const [duration, setDuration] = useState(180)
  const [durationUnit, setDurationUnit] = useState("months")
  const [loanAmount, setLoanAmount] = useState(0)
  const [emi, setEMI] = useState(0)

  // Income preset buttons
  const incomePresets = [
    { label: "10L", value: 1000000 },
    { label: "25L", value: 2500000 },
    { label: "50L", value: 5000000 },
    { label: "75L", value: 7500000 },
    { label: "1Cr", value: 10000000 },
  ]

  // EMI preset buttons
  const emiPresets = [
    { label: "0", value: 0 },
    { label: "50K", value: 50000 },
    { label: "1L", value: 100000 },
    { label: "5L", value: 500000 },
    { label: "10L", value: 1000000 },
    { label: "25L", value: 2500000 },
  ]

  // Calculate EMI and loan eligibility
  useEffect(() => {
    calculateLoanEligibility()
  }, [monthlyIncome, existingEMI, interestRate, duration, durationUnit])

  const calculateLoanEligibility = () => {
    // Validation
    if (monthlyIncome < 20000) {
      setLoanAmount(0)
      setEMI(0)
      return
    }

    const validInterestRate = Math.max(interestRate, 7)
    const validDuration = durationUnit === "years" ? Math.max(duration * 12, 36) : Math.max(duration, 36)

    // Calculate available EMI (typically 40-50% of income minus existing EMIs)
    const availableEMI = monthlyIncome * 0.55 - existingEMI

    if (availableEMI <= 0) {
      setLoanAmount(0)
      setEMI(0)
      return
    }

    // Calculate loan amount using EMI formula: P = EMI * [(1+R)^N - 1] / [R * (1+R)^N]
    const monthlyRate = validInterestRate / 12 / 100
    const numberOfPayments = validDuration

    const loanPrincipal =
      availableEMI *
      ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)))

    setLoanAmount(Math.round(loanPrincipal))
    setEMI(Math.round(availableEMI))
  }

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2)} Cr`
    } else if (amount >= 100000) {
      return `₹ ${(amount / 100000).toFixed(2)} L`
    } else {
      return `₹ ${amount.toLocaleString()}`
    }
  }

  const handleIncomeChange = (value) => {
    const numValue = Math.max(20000, Number.parseInt(value) || 20000)
    setMonthlyIncome(numValue)
  }

  const handleEMIChange = (value) => {
    const numValue = Math.max(0, Number.parseInt(value) || 0)
    setExistingEMI(numValue)
  }

  const handleDurationChange = (value) => {
    const minValue = durationUnit === "years" ? 3 : 36
    const numValue = Math.max(minValue, Number.parseInt(value) || minValue)
    setDuration(numValue)
  }

  useEffect(()=>{
    if(durationUnit == "months")
        setDuration(180)
    else{
        setDuration(15)
    }
  },[durationUnit]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="py-10 text-center font-bold text-3xl primary-color">Calculate your Home Loan Eligibility</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Calculate your monthly EMI</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Monthly Income */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">Enter Monthly Income</label>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <input
                        type="number"
                        value={monthlyIncome}
                        onChange={(e) => handleIncomeChange(e.target.value)}
                        className="text-lg font-semibold border-0 bg-transparent outline-none"
                        min="20000"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mb-3">One Lakh</p>
                    <div className="flex flex-wrap gap-2">
                      {incomePresets.map((preset) => (
                        <button
                          key={preset.label}
                          variant="outline"
                          size="sm"
                          onClick={() => setMonthlyIncome(preset.value)}
                          className={`bg-gray-100 px-3 py-2 text-xs rounded-full text-gray-700 border-gray-300 hover:bg-indigo-800 hover:text-white ${monthlyIncome == preset.value ? 'bg-indigo-800 text-white' : ''}`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Other Existing EMIs */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Other Existing EMIs (Monthly)
                    </label>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <input
                        type="number"
                        value={existingEMI}
                        onChange={(e) => handleEMIChange(e.target.value)}
                        className="text-lg font-semibold border-0 bg-transparent outline-none"
                        min="0"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mb-3">Fifty Thousand</p>
                    <div className="flex flex-wrap gap-2">
                      {emiPresets.map((preset) => (
                        <button
                          key={preset.label}
                          variant="outline"
                          size="sm"
                          onClick={() => setExistingEMI(preset.value)}
                          className={`bg-gray-100 px-3 py-2 text-xs rounded-full text-gray-700 border-gray-300 hover:bg-indigo-800 hover:text-white 
                            ${existingEMI === preset.value
                            ? 'bg-indigo-800 text-white'
                            : ''}
                          `}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Interest Rate */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Illustrative Interest Rate (p.a.)*
                    </label>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3">
                      <div className="text-lg font-semibold">{interestRate}%</div>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="7"
                        max="18"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number.parseFloat(e.target.value))}
                        className="w-full h-2 bg-yellow-400 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>7%</span>
                        <span>10%</span>
                        <span>13%</span>
                        <span>16%</span>
                        <span>18%</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <label className="text-sm font-medium text-gray-700">Duration</label>
                      <div className="flex bg-gray-100 rounded-full text-sm overflow-hidden">
                        <button
                          variant={durationUnit === "months" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setDurationUnit("months")}
                          className={
                            durationUnit === "months" ? "bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1" : "text-gray-600 px-2 py-1"
                          }
                        >
                          Months
                        </button>
                        <button
                          variant={durationUnit === "years" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setDurationUnit("years")}
                          className={
                            durationUnit === "years" ? "bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1" : "text-gray-600 px-2 py-1"
                          }
                        >
                          Years
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg mb-3 relative">
                      <input
                        type="number"
                        value={duration}
                        onChange={(e) => handleDurationChange(e.target.value)}
                        className="text-lg outline-none font-semibold border-0 bg-transparent"
                        min={durationUnit === "years" ? "3" : "36"}
                      />
                      <div className="absolute top-5 left-12 text-sm text-gray-600">{durationUnit === "months" ? "Months" : "Years"}</div>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={durationUnit === "years" ? "3" : "36"}
                        max={durationUnit === "years" ? "30" : "360"}
                        value={duration}
                        onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                        className="w-full h-2 bg-yellow-400 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        {durationUnit === "years" ? (
                          <>
                            <span>3Y</span>
                            <span>10Y</span>
                            <span>15Y</span>
                            <span>20Y</span>
                            <span>30Y</span>
                          </>
                        ) : (
                          <>
                            <span>36M</span>
                            <span>120M</span>
                            <span>180M</span>
                            <span>240M</span>
                            <span>360M</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-6">
                  *For representation purpose only. Final values may vary subject to bank's policy
                </p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <div className="bg-orange-50 shadow-lg sticky top-4">
              <div className="p-6 text-center">
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">You are borrow for a Total Amount of</p>
                  <div className="text-3xl font-bold text-gray-800">{formatCurrency(loanAmount)}*</div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Your EMI will be</p>
                  <div className="text-xl font-semibold text-gray-700">₹ {emi.toLocaleString()}*</div>
                </div>

                {monthlyIncome < 20000 && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                    <p className="text-red-700 text-sm">Monthly income should be at least ₹20,000</p>
                  </div>
                )}

                {monthlyIncome * 0.55 <= existingEMI && monthlyIncome >= 20000 && (
                  <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                    <p className="text-yellow-700 text-sm">Your existing EMIs are too high compared to your income</p>
                  </div>
                )}

                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
                  disabled={loanAmount === 0}
                >
                  APPLY FOR HOME LOAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
