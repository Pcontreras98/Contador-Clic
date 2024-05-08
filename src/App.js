import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import CodeLogo from './imagenes/freecodecamp-logo.png'

function App() {

  const manejarClic = () =>{
    console.log('click');
  }

  const reiniciarContador = () =>{
    console.log('Reiniciar');
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
          numeroClics={5}
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
