import axios from 'axios';
import React ,{createContext,useEffect,useState}from 'react'

export const ModalContext=createContext();


///crear el componente Provider

const ModalProvider=(props)=>{

    //state Provider
    const [idReceta, guardarIdReceta] = useState(null)
     const [receta, setreceta] = useState({})
     console.log(receta)
    ///se actualizo
    //se ejecuta despues que se renderiza nuestro componente por lo cual podemos obtener valores
    useEffect( () => {
        const obtenerReceta = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const resultado = await axios.get(url);
            ///como tienes un elemntos vamos a su posicion 0    
            setreceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idReceta]);

    return(<ModalContext.Provider
    //un objeto como atributos
    value={{guardarIdReceta:guardarIdReceta}}
    >
        {
            props.children
        }
    </ModalContext.Provider>)

}

export default ModalProvider