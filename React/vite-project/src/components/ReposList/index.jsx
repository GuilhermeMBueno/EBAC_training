import { useEffect, useState } from "react";
import './repolist.css'

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/GuilhermeMBueno/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 1000);
        })
    }, [])

    return (
    <>
        {estaCarregando && (
        <h1>Carregando...</h1>
        )}

        {/* <ul>
            {repos.map(repositorio => (
                <li className="marginTop" key={repositorio.id}>
                    <b>Nome:</b> {repositorio.name} <br/>
                    <b>Languagem:</b> {repositorio.language} <br/>
                    <a target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
        </ul> */}

        <ul>
            {repos.map(({id, name, language, html_url})=> (
                <li className="marginTop" key={id}>
                    <b>Nome:</b> {name} <br/>
                    <b>Languagem:</b> {language} <br/>
                    <a target="_blank" href={html_url}>Visitar no GitHub</a>
                </li>
            ))}
        </ul>

    </>

    )
}

export default ReposList;