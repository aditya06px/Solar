import React, { useState, useEffect } from 'react';
import "./SolarCalculator.css"

const SolarCalculator = () => {
    const [calculationType, setCalculationType] = useState('bill');
    const [averageBill, setAverageBill] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [customerCategory, setCustomerCategory] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [errors, setErrors] = useState({});
    const [result, setResult] = useState(null);

    const statesOfIndia = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi",
        "Lakshadweep", "Puducherry"
    ];


    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const validateForm = () => {
        const newErrors = {};
        if (!averageBill || parseFloat(averageBill) < 1) {
            newErrors.averageBill = 'Please enter a value greater than or equal to 1';
        }
        if (!selectedState) {
            newErrors.selectedState = 'Please select your state';
        }
        if (!customerCategory) {
            newErrors.customerCategory = 'Please select customer category';
        }
        if (!unitPrice || parseFloat(unitPrice) < 1) {
            newErrors.unitPrice = 'Please enter a unit price greater than or equal to 1';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculateResult = () => {
        let totalConsumption;


        if (calculationType === 'bill') {
            totalConsumption = averageBill / unitPrice;
        } else {
            totalConsumption = averageBill;
        }

        const dailyConsumption = totalConsumption / 30;
        const requiredSystemSize = dailyConsumption / 4;

        const monthlyBill = totalConsumption * unitPrice;
        const yearlyBill = monthlyBill * 12;
        const billAfter25Years = yearlyBill * 25;

        setResult({
            requiredSystemSize: requiredSystemSize.toFixed(2),
            monthlyBill: monthlyBill.toFixed(2),
            yearlyBill: yearlyBill.toFixed(2),
            billAfter25Years: billAfter25Years.toFixed(2),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            calculateResult();
        }
    };

    return (
        <div className="calculator-container">
            <h2>Solar Calculator</h2>

            {/* Checkboxes for Bill or Units */}
            <div className="calculator-row">
                <label>
                    <input
                        type="checkbox"
                        checked={calculationType === 'bill'}
                        onChange={() => setCalculationType('bill')}
                    />

                    <span className="checkbox-text">
                        Average Monthly <span className="break-line">Bill (Rs)</span>
                    </span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={calculationType === 'units'}
                        onChange={() => setCalculationType('units')}
                    />

                    <span className="checkbox-text">
                        Average Monthly <span className="break-line">Units (kWh)</span>
                    </span>
                </label>
            </div>

            {/* Input for Bill or Units */}
            <div className="calculator-row input-box-size">
                <input
                    type="number"
                    value={averageBill}
                    onChange={(e) => setAverageBill(e.target.value)}
                    className="calculator-input"
                    placeholder={calculationType === 'bill' ? 'Enter Bill in Rs' : 'Enter Units in kWh'}
                    min={1}
                />
                {errors.averageBill && <span className="error">{errors.averageBill}</span>}
            </div>

            <hr className="custom-hr" />


            {/* State Dropdown */}
            <div className="state-customer-row">
                <div className="calculator-row dropdown-flex">
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="calculator-select"
                    >
                        <option value="">Select State</option>
                        {statesOfIndia.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                    {errors.selectedState && (
                        <span className="error error-dropdown">{errors.selectedState}</span>
                    )}
                </div>

                {/* Customer Category Dropdown */}
                <div className="calculator-row dropdown-flex">
                    <select
                        value={customerCategory}
                        onChange={(e) => setCustomerCategory(e.target.value)}
                        className="calculator-select"
                    >
                        <option value="">Select Category</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                    </select>
                    {errors.customerCategory && (
                        <span className="error error-dropdown">{errors.customerCategory}</span>
                    )}
                </div>
            </div>


            <hr className="custom-hr" />

            {/* Average Unit Price Input */}
            <div className="calculator-row input-box-size">
                <input
                    type="number"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                    className="calculator-input"
                    placeholder="Enter Unit Price (Rs/kWh)"
                    min={1}
                />
                {errors.unitPrice && <span className="error">{errors.unitPrice}</span>}
            </div>

            {/* Submit Button */}
            <div className="calculator-row">
                <button onClick={handleSubmit} className="calculator-button">
                    Calculate
                </button>
            </div>

            {/* Result */}
            {result && (
                <div className="calculator-result">
                    <h3>Estimated Results:</h3>
                    <p>Required Solar System Size: {result.requiredSystemSize} kW</p>
                    <p>Monthly Bill: Rs {result.monthlyBill}</p>
                    <p>Yearly Bill: Rs {result.yearlyBill}</p>
                    <p>Bill after 25 Years: Rs {result.billAfter25Years}</p>
                    <p><strong>Note:</strong> These are estimated numbers. For accurate values, please contact our team.</p>
                </div>
            )}
        </div>
    );
};

export default SolarCalculator;
