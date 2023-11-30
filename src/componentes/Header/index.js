import Logo from '../Logo';
import Topicos from '../TopicosHeader';
import Icones from '../IconesHeader';
import './style.css';

function Header() {
    return(
        <header className='App-header'>
            <Logo/>
            <Topicos/>
            <Icones/>     
        </header>
    ) 
}

export default Header;