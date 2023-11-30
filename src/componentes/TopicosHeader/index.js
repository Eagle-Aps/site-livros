import './style.css';

const textoTopicos = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function Topicos () {
    return(
        <ul className='topicos'>
          { textoTopicos.map((texto) => (
              <li className='topico'><p>{texto}</p></li>
              ) ) }
         </ul> 
    )
}
export default Topicos;