import React, { useState } from 'react';

function ImcScreen() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const calculateImc = () => {
        if (!height || !weight) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const heightInMeters = height / 100;
        const imc = weight / (heightInMeters * heightInMeters);
        setResult(imc.toFixed(2));
    };

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <div>
                <label htmlFor="height">Altura (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="weight">Peso (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <button onClick={calculateImc}>Calcular</button>
            {result && <p>Seu IMC é {result}</p>}
        </div>
    );
}

export default ImcScreen;
