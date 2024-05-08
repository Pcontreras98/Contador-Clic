import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import CodeLogo from './imagenes/pabloContrerasLogo.png'
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);

  const manejarClic = () =>{
    setnumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setnumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={CodeLogo}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numeroClics={numClics}
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>

    </div>
  );
}

export default App;
