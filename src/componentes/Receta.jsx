import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';

export default function Receta({receta}) {

  ///Configurar del modal del material-ui
    // Configuración del modal de material-ui
    
  const { guardarIdReceta}=useContext(ModalContext);
  const click=(e)=>{
    e.preventDefault();
    
    guardarIdReceta(receta.idDrink)

  }
  return (
    <div className="col-md-4">
        <div className="card">
            <h2 className='card-header'>{receta.strDrink}</h2>
            <img src={receta.strDrinkThumb} alt={`Imagne de ${receta.strDrink}`}/>
            <div className="card-body">
                <button
                type='button'
                className='btn btn-block btn-secondary'
                onClick={click}
                >
                    Ver receta
                </button>
            </div>
        </div>
    </div>
  )
}
