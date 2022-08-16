import React from 'react'
import { useContext } from 'react'
import { recetaContext } from '../context/RecetasContext'
import Receta from './Receta';

export default function ListaRecetas() {


    //obtener use context
    const {recetas}=useContext(recetaContext);
          
     console.log(recetas)
    //console.log(recetas)

  return (
    <div className='row mt-5'>
        {
         recetas.map((receta)=><Receta
         key={receta.strDrink}
         receta={receta}
         />)  
        }
    </div>
  )
}
