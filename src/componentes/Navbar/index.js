import './navbar.css'
import { SiReact } from 'react-icons/si';

const Navbar = () => {
    return( 
        <header>
            <SiReact size={18}/>
            <p className='logo'>ReactMovies</p>
            <nav>
                <ul class='nav__links'>
                    <li><a href="#">Criar Colaborador</a></li>
                    <li><a href="#">Criar Time</a></li>
                </ul>
            </nav>
            <a class='cta' href='#'><button>Contatos</button></a>
        </header>
    )
}  

export default Navbar