function App() {
  const nome = "Guilherme";

  function retornaNome(){
    return nome;
  }

  const pessoa = {
    nome: "Maria"
  }

  return (
    <>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
    </>
  )
}

export default App
