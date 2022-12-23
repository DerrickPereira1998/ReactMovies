import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({id, nome, imagem, cargo, corDeFundo, aoDeletar, favorito, aoFavoritar, classificacao, aoClassificar}) => {
    function favoritar(){
        aoFavoritar(id)
    }

    function classificar(){
        aoClassificar(id)
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
                {classificacao 
                    ? <AiFillStar size={25} onClick={classificar} color='gold'/> 
                    : <AiOutlineStar size={25} onClick={classificar}/>}
                {favorito 
                    ? <AiFillHeart size={25} onClick={favoritar} color='red'/> 
                    : <AiOutlineHeart size={25} onClick={favoritar}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador