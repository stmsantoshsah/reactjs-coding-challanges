import React, { useEffect, useState } from "react";

const Calculator = () => {
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [duration, setDuration] = useState(0);
    const [emi, setEmi] = useState(0);

    const handleChange = (e) => {
        const { id, value } = e.target;
        const parsedValue = value ? parseFloat(value) : 0;

        if (id === "principal") setPrincipal(parsedValue);
        else if (id === "interest") setInterest(parsedValue);
        else setDuration(parsedValue);
    };

    const calculateEmi = () => {
        if (principal > 0 && interest > 0 && duration > 0) {
            let r = interest / 12 / 100; // Monthly interest rate
            let n = duration * 12; // Total number of months
            let calcPow = Math.pow(1 + r, n);
            let amount = (principal * r * calcPow) / (calcPow - 1);
            setEmi(Math.round(amount));
        } else {
            setEmi(0);
        }
    };

    useEffect(() => {
        calculateEmi();
    }, [principal, interest, duration]);

    return (
        <div className="loan-calc">
            <h2>Mortgage Calculator</h2>
            <div>
                <label htmlFor="principal">Principal</label>
                <input type="number" id="principal" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="interest">Interest Rate</label>
                <input type="number" id="interest" onChange={handleChange} /> %
            </div>
            <div>
                <label htmlFor="duration">Duration (Years)</label>
                <input type="number" id="duration" onChange={handleChange} /> years
            </div>
            <div className="output">
                <p>Your monthly mortgage payment will be: <strong>₹{emi}</strong></p>
            </div>
        </div>
    );
};

export default Calculator;
