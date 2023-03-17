import React, { useState } from 'react';
import './IMCCalculator.css';

function IMCCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');
    const [message, setMessage] = useState('');

    const handleCalculate = () => {
        const bmi = weight / (height / 100) ** 2;
        setResult(bmi.toFixed(2));

        if (bmi >= 30) {
            setMessage('Você está obeso.');
        } else {
            setMessage('');
        }
    };

    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <div className="form-group">
                <label>Peso (kg):</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Altura (cm):</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="form-group">
                <button onClick={handleCalculate}>Calcular</button>
            </div>
            {result && <p className="result">Seu IMC é: {result}</p>}
            {message && <p className="result">{message}</p>}
        </div>
    );
}


export default IMCCalculator;
