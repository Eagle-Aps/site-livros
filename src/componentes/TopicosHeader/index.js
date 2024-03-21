import styled from "styled-components";
import { Link } from "react-router-dom";

const textoTopicos = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const TopicosC = styled.ul`
    text-decoration: none;
    display: flex;
    `
const Topico = styled.li`
    text-decoration: none;
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
function Topicos () {
    return(
        <TopicosC>
          { textoTopicos.map((topico) => (
              <Link to= {`./${topico.toLowerCase()}`}><Topico><p>{topico}</p></Topico></Link>
              ) ) }
         </TopicosC> 
    )
}
export default Topicos;