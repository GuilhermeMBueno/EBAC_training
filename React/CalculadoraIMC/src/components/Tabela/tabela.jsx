import styles from './Tabela.module.css'

export default function tabela(){
    return(
        <>
            <table>
                <tr>
                    <th>ICM (kg/m2)</th>
                    <th >Classificação</th>
                </tr>
                <tr className={styles.CorMagro}>
                    <td>Menor que 18,5</td>
                    <td>Abaixo do peso </td>
                </tr>
                <tr className={styles.CorNormal}>
                    <td>18,6 a 24,9</td>
                    <td>Peso normal </td>
                </tr>
                <tr className={styles.CorAcimaDoPeso}>
                    <td>25 a 30</td>
                    <td>Acima do peso</td>
                </tr>
                <tr className={styles.CorObesidade}>
                    <td>Acima de 30</td>
                    <td>Inicio do 1º Grau de obesidade</td>
                </tr>
            </table>
        </>
    )
}