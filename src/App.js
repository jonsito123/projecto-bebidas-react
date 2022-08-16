import "./index.css"
import Header from './componentes/Header';
import Formulario from "./componentes/Formulario";
import ListaRecetas from "./componentes/ListaRecetas";
import CategoriasProvider from "./context/CategoriasContext";
import RecetaProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";



function App() {
  return (
  <>

  <CategoriasProvider>
  <RecetaProvider>
  <ModalProvider>
  <Header/>

   <div className="container">
    <div className="row">
      <Formulario/>
      
    </div>

      <ListaRecetas/>
    
   </div>
   </ModalProvider>
   </RecetaProvider>
   </CategoriasProvider>
  </>
      
   
    
  );
}

export default App;
