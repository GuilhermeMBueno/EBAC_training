import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return (
    <>
      <Perfil nome="Guilherme" endereco="https://github.com/GuilhermeMBueno.png"/>
      
      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button" >Toggle Form</button>
    </>
  )
}

export default App
