import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, aoFavoritar, mudarCor}) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5') }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor'/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {
                    return(
                        <Colaborador 
                            corDeFundo={time.cor} 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            id={colaborador.id} 
                            favorito={colaborador.favorito} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />)
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Time