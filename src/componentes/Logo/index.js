import logo from '../../imagens/logo.svg'
import './style.css'

function Logo(){
    return (
    <div className='logo'>
          <img 
            src={logo} 
            alt='logo' 
            className='logo-img'
          ></img>
          <p> Livraria <strong>Araguaia</strong></p>
    </div>
    );
}

export default Logo;