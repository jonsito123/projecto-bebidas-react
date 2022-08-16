import React, { createContext, useEffect, useState } from "react"
import axios from "axios"
export const recetaContext=createContext();



///crear mi comonentes
const RecetaProvider=(props)=>{

const [recetas, guardarRecetas] = useState([])
//useState 

const [busqueda, buscarRecetas] = useState({
    nombre:"",
    categoria:""
})

///consultar
const [consultar, setconsultar] = useState(false);

const {nombre,categoria}=busqueda;
console.log(busqueda)
///useEffect
useEffect(() => {
    if(consultar) {
        const obtenerRecetas = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

            const resultado = await axios.get(url);
           
            // console.log(resultado.data.drinks);
            guardarRecetas(resultado.data.drinks);
        }

        obtenerRecetas();
    }

}, [busqueda]);

    return(

        <recetaContext.Provider
         value={{buscarRecetas:buscarRecetas,
        recetas:recetas,
      guardarRecetas:guardarRecetas,
       setconsultar:setconsultar}}
        >
            {
             props.children
            }
        </recetaContext.Provider>
    )
}

export default RecetaProvider;