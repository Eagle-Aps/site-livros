import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoC = styled.div `
  text-decoration: none;
  display: flex;
  font-size: 30px;
  aling-items:center;
  `
const LogoImg = styled.img `
  margin-right: 10px; 
  `

function Logo(){
    return (
    <LogoC>
          <Link to='./'>
          <LogoImg
            src={logo} 
            alt='logo' 
          />
          <p> Livraria <strong>Araguaia</strong></p>
          </Link>
    </LogoC>
    );
}

export default Logo;