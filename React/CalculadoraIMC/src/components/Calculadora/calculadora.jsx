import { useState } from "react";
import styles from './Calculadora.module.css'

export default function Calculadora() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [classeEstilo, setClasseEstilo] = useState('');

    const calculaImc = () => {
        const pesoFloat = parseFloat(peso);
        const alturaMetros = parseFloat(altura) / 100;  // Convertendo altura para metros

        if (isNaN(pesoFloat) || isNaN(alturaMetros) || alturaMetros === 0) {
            setResultado(
                <p className={styles.dadoInvalido}>
                Valores inválidos! Por favor, insira números válidos para peso e altura.
                </p>);
            return;
        }

        // Lógica para calcular o IMC
        const resultadoCalculado = pesoFloat / (alturaMetros * alturaMetros);
        setResultado(`Seu IMC é: || ${resultadoCalculado.toFixed(2)}||, confira a baixo em qual faixa você esta!`);
    };

    return (
        <>
            <div className={styles.form}>
                <label className={styles.label}>Insira seu peso:</label>
                <input className={styles.input} type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
                <div>
                    <label className={styles.label}>Insira sua altura (em cm):</label>
                    <input className={styles.input} type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>

                <button onClick={calculaImc}>Calcular IMC</button>
            </div>

            <p className={styles.resultado}>{resultado}</p>
        </>
    );
}
