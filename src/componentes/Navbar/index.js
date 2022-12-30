import './navbar.css'
import { SiReact } from 'react-icons/si';

const Navbar = () => {
    return( 
        <header>
            <SiReact size={18}/>
            <p className='logo'>ReactMovies</p>
            <nav>
                <ul className='nav__links'>
                    <li><a href="#">Criar Colaborador</a></li>
                    <li><a href="#">Criar Time</a></li>
                </ul>
            </nav>
            <a className='cta' href='#'><button>Contatos</button></a>
        </header>
    )
}  

export default Navbar