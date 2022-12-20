import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({id, nome, imagem, cargo, corDeFundo, favorito, aoDeletar, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(id)
    }

    return (<div className='colaborador'>
        <AiFillCloseCircle 
            size={20} 
            className='deletar' 
            onClick={() => aoDeletar(id)} //use arrow funcion para falar que e uma função a ser executada
        />
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito 
                    ? <AiFillHeart size={25} onClick={favoritar} color='red'/> 
                    : <AiOutlineHeart size={25} onClick={favoritar}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador