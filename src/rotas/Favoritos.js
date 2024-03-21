import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import HPCF from '../imagens/HPCáliceDeFogo.png'

const AppComponents = styled.div`
  text-decoration: none;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);

`
const ResultadoComponents = styled.div`
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    text-decoration: none;
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`
function Favoritos() {

  const [favoritos, setFavoritos] = useState ([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function delFavorito (id){
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro removido dos favoritos!`)
  }

  return (
    <AppComponents>
      <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoComponents>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado onClick= { () => delFavorito(favorito.id)}>
               <p>{favorito.nome}</p>
               <img src={HPCF}/>
             </Resultado>
           )) : null
         }
       </ResultadoComponents>
     </div>
    </AppComponents>
  )
}
export default Favoritos
