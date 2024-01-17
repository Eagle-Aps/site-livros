import { livros } from './dadosLancamentos'
import styled from 'styled-components'
import {Titulo} from '../Titulo'
import CardRecomendacao from '../CardRecomendacao'
import PercyJackson from '../../imagens/PJLadraoDeRaios.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    p {
        width: 600px;
    }
    img {
        width: 300px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Lancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor = {'#EB9B00'}
            tamanhoFonte = {"36px"}
            >
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
            {livros.map(livro => (
                <img src={livro.src} alt='Livro' />
            ))}
            </NovosLivrosContainer>

            <CardRecomendacao 
            titulo="Talvez você se interesse por..."
            subtitulo="Percy Jackson e o Ladrão de Raios"
            descricao="Descubra um novo mundo fantástico, onde monstros e deus mitológicos são reais"
            img={PercyJackson}
            />
            
        </UltimosLancamentosContainer>
    )
}
export default Lancamentos