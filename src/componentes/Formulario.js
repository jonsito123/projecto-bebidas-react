import React, { useContext ,useState} from 'react'
import { categoriasContext } from '../context/CategoriasContext'
import { recetaContext } from '../context/RecetasContext'

function Formulario() {

   ///context recetaContext
   const {buscarRecetas,setconsultar}=useContext(recetaContext)

   ///metodo submit
   const metodoSubmit=(e)=>{
    e.preventDefault();
    if(busqueda.nombre==="" || busqueda.categoria===""){
      return
    }
    
   buscarRecetas(busqueda)
      setconsultar(true)
       
   }

  ///fileset es el titul del formulario
   
 const {categorias}=useContext(categoriasContext)
 
  ////obtener el valor  del context general

  ///ver la busqueda
  const [busqueda, setbusqueda] = useState({nombre:"",
  categoria:""

})

   ///destrucuturacion
   const {nombre,categoria}=busqueda

   ///metodo para obtener la busqueda

    const onChangeInput=(e)=>{
      setbusqueda({
        ...busqueda,[e.target.name]:e.target.value
      })
    }
   
  return (
   <>
   <form className='col-lg-12 mt-2'
   onSubmit={metodoSubmit}
   
   >
     
    <fieldset className='text-center text-truncate'>
        <legend className=''>Buscar Bebidas por Categorias o Ingredientes:</legend>
    </fieldset>
      
    <div className="row mt-4">

             
     <div className="col-md-4">
      
        <input  
        name='nombre'
        className='form-control'
        type="text"
        onChange={onChangeInput}
        value={nombre}
        
        placeholder='Buscar por ingrediente'
        />
        
      </div>

      <div className="col-md-4">
     <select name='categoria' onChange={onChangeInput} value={categoria} className='form-control'>
         {
          categorias.map((categoria)=><option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>)
         }

     </select>
      </div>
      <div className="col-md-4">
      
      <input  
        name='nombre'
        className='form-control'
        type="submit"
        value="Buscar"
        
        />
      </div>

     </div>


   </form>

   </>
  )
}

export default Formulario
