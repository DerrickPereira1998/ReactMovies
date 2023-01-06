import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Filme'
import './Categoria.css'

const Categoria = ({categoria, filmes, aoDeletar, aoFavoritar, mudarCor, aoClassificar}) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(categoria.cor, '0.5') }

    return (
        (filmes.length > 0) ? <section className='categoria' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, categoria.id)} value={categoria.cor} type='color' className='input-cor'/>
            <h3 style={{ borderColor: categoria.cor }}>{categoria.nome}</h3>
            <div className='filmes'>
                {filmes.map( filme => {
                    return(
                        <Colaborador 
                            corDeFundo={categoria.cor} 
                            key={filme.nome} 
                            nome={filme.nome} 
                            cargo={filme.cargo} 
                            imagem={filme.imagem} 
                            id={filme.id}
                            aoDeletar={aoDeletar} 
                            favorito={filme.favorito} 
                            aoFavoritar={aoFavoritar}
                        />)
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Categoria