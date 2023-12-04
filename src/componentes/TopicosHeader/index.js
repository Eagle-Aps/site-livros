import styled from "styled-components"

const textoTopicos = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const TopicosC = styled.ul`
    display: flex;
    `
const Topico = styled.li`
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
          { textoTopicos.map((texto) => (
              <Topico><p>{texto}</p></Topico>
              ) ) }
         </TopicosC> 
    )
}
export default Topicos;