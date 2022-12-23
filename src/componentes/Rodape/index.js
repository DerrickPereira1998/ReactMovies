import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiReact } from 'react-icons/si';
import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://linkedin.com/in/derrick-andre-pereira-73931a174' target='_blank'>
                            <AiFillLinkedin color='black' size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/DerrickPereira1998' target='_blank'>
                            <AiFillGithub color='black' size={40}/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>    
                <div>
                    <SiReact color='black' size={32}/>
                </div> 
                <div>
                    <p>ReactMovies</p>
                </div>
            </section>
            <section>
                <p>Desenvolvido por Derrick Pereira</p>
            </section>
        </footer>
    )
}

export default Rodape