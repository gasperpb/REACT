import React, { useState } from 'react';

function Conversor() {
    const [real, setReal] = useState(0);
    const [dolar, setDolar] = useState(0);

    const converter = async () => {
        const response = await fetch('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/MoedasOpcionais?$top=100&$format=json');
        const data = await response.json();
        const cotacao = data.value.find((item) => item.simbolo === 'USD').cotacaoCompra;
        setDolar((real / cotacao).toFixed(2));
    };

    return (
        <div>
            <h1>Conversor de Real para Dólar</h1>
            <div>
                <label>Valor em Real:</label>
                <input type="number" value={real} onChange={(e) => setReal(e.target.value)} />
            </div>
            <div>
                <button onClick={converter}>Converter</button>
            </div>
            <div>
                <label>Valor em Dólar:</label>
                <span>{dolar}</span>
            </div>
        </div>
    );
}

export default Conversor;
