import { useEffect, useState } from "react";
import styles from './ReposList.module.css'

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
    <div className="container">
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

            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Languagem:</b>
                            {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>

    </div>

    )
}

export default ReposList;