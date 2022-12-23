import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './Categoria.css'

const Categoria = ({categoria, colaboradores, aoDeletar, aoFavoritar, mudarCor, aoClassificar}) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(categoria.cor, '0.5') }

    return (
        (colaboradores.length > 0) ? <section className='categoria' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, categoria.id)} value={categoria.cor} type='color' className='input-cor'/>
            <h3 style={{ borderColor: categoria.cor }}>{categoria.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {
                    return(
                        <Colaborador 
                            corDeFundo={categoria.cor} 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            id={colaborador.id}
                            aoDeletar={aoDeletar} 
                            favorito={colaborador.favorito} 
                            aoFavoritar={aoFavoritar}
                            classificacao={colaborador.classificacao}                            
                            aoClassificar={aoClassificar}
                        />)
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Categoria