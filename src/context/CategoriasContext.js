import axios from "axios";
import { createContext, useState ,useEffect} from "react";

///exportar la constante categoras context
export const categoriasContext=createContext();

//el componente proviedro


const CategoriasProvider=(props)=>{

    
    const [categorias, setCategoria] = useState([])

    ///ejecutar cuando se carge el componente
    useEffect(() => {
        const obtenerCategorias=async()=>{

          const categorias=await  axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
             
         setCategoria(categorias.data.drinks)

        }
        obtenerCategorias();
     
    }, []) //DEPEDNDEICA/*
    
    return<categoriasContext.Provider
    ///va enviar un objeto de valores
     value={{categorias:categorias}}

    >

        {props.children}
    </categoriasContext.Provider>


}

export default CategoriasProvider