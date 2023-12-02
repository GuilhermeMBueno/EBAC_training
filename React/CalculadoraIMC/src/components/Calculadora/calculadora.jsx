import { useState } from "react";
import styles from './Calculadora.module.css'

export default function Calculadora() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const calculaImc = () => {
        const pesoFloat = parseFloat(peso);
        const alturaMetros = parseFloat(altura) / 100;  // Convertendo altura para metros

        if (isNaN(pesoFloat) || isNaN(alturaMetros) || alturaMetros === 0) {
            setResultado("Valores inválidos. Por favor, insira números válidos para peso e altura.");
            return;
        }

        // Lógica para calcular o IMC
        const resultadoCalculado = pesoFloat / (alturaMetros * alturaMetros);
        setResultado(`Seu IMC é: ${resultadoCalculado.toFixed(2)}`);
    };

    return (
        <>
        <label>Insira seu peso:</label>
        <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)}/>
        <label>Insira sua altura (em cm):</label>
        <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)}/>
        <button onClick={calculaImc}>Calcular IMC</button>
        <p className={styles.resultado}>{resultado}</p>
        </>
    );
}
