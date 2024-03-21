import Logo from '../Logo';
import Topicos from '../TopicosHeader';
import Icones from '../IconesHeader';
import styled from 'styled-components';

const HeaderComponents = styled.header `
    text-decoration: none;
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
function Header() {
    return(
        <HeaderComponents>
            <Logo/>
            <Topicos/>
            <Icones/>     
        </HeaderComponents>
    )
}

export default Header;