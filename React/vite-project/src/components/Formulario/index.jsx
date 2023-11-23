import { useState } from "react"
import './formulario.css'

export default () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');
    
    const alteraNome = (evento) =>{
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p className="aprovado">Parabéns <strong>{nome}</strong>| Você foi aprovado!</p>
            )
        } else {
            return(
                <p className="reprovado">Poxa <strong>{nome}</strong>, voce não foi aprovado!</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu Nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota Matéria A" onChange={({ target }) => setMateriaA(parseFloat(target.value))}/>
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}