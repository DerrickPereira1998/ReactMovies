import './Banner.css'
import { SiReact } from 'react-icons/si';

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src="/imagens/Banner.png" alt="O banner principal da página do App"/>
            <div>
                <SiReact color='white' size={60}/>
                <p>React Movies</p>
            </div>
        </header>
    )
}

export default Banner