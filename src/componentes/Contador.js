import React from 'react'
import '../hoja-de-estilos/contador.css'


function Contador( {numeroClics} ) {
  return (
    <div className='contador'>
      {numeroClics}
    </div>
  );
}

export default Contador
