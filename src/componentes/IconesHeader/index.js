import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li `
    text-decoration:none;
    display: flex;
    margin-right: 40px;
    width: 20px;
    align-items: center;
    `

const IconesC = styled.ul `
    text-decoration:none;
    display: flex;
    align-items: center;
    `
const icones = [perfil, sacola]

function Icones(){
    return (
        <IconesC>
            { icones.map( (icone) => (
              <Icone><img src={icone} alt='icone'></img></Icone>
              ) ) }
          </IconesC>  
    )
}

export default Icones;
