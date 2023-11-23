import './perfil.css'

export default (props) => {
    // const usuario = {
    //     nome: 'Guilherme Bueno',
    //     avatar: 'https://github.com/GuilhermeMBueno.png'
    // }
        const {endereco, nome } = props;
        return (
            <div>
                <img className="perfil-avatar" src={endereco}/>
                <h3 className="perfil-titulo">{nome}</h3>
            </div>
        )
    
}
    

// const Perfil = () => {
// }
// export default Perfil;