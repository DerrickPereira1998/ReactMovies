import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                    <img src="/imagens/fb.png" alt="facebook"/>
                    </li>
                    <li>
                    <img src="/imagens/tw.png" alt="Twitter"/>
                    </li>
                    <li>
                    <img src="/imagens/ig.png" alt="Instagram"/>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="logo"/>
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape