import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li `
    display: flex;
    margin-right: 40px;
    width: 25px;
    align-items: center;
    `

const IconesC = styled.ul `
    display: flex;
    align-items: center;
    `
const icones = [perfil, sacola]

function Icones(){
    return (
        <IconesC>
            { icones.map( (icone) => (
              <Icone><img src={icone}></img></Icone>
              ) ) }
          </IconesC>  
    )
}

export default Icones;
