import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoC = styled.div `
  display: flex;
  font-size: 30px;
  `
const LogoImg = styled.img `
  margin-right: 10px; 
  `

function Logo(){
    return (
    <LogoC>
          <LogoImg
            src={logo} 
            alt='logo' 
          />
          <p> Livraria <strong>Araguaia</strong></p>
    </LogoC>
    );
}

export default Logo;