import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Filme.css'

const Colaborador = ({id, nome, imagem, cargo, corDeFundo, aoDeletar, favorito, aoFavoritar, classificacao, aoClassificar}) => {
    
    function Classificar(numero){
        aoClassificar(id,numero)
    }
    
    function favoritar(){
        //estrela
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
                
                {classificacao ==  0 //Essa e a unica maneira que achei de fazer isso, se souber uma melhor porfavor me fale, eu sei que isso não esta bom
                    && <><AiOutlineStar size={20} onClick={() => aoClassificar(id,1)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,2)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,3)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,4)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,5)} color='gold'/></>}
                {classificacao ==  1 
                    && <><AiFillStar size={20} onClick={() => aoClassificar(id,0)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,2)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,3)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,4)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,5)} color='gold'/></>}
                {classificacao ==  2
                    && <><AiFillStar size={20} onClick={() => aoClassificar(id,0)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,1)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,3)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,4)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,5)} color='gold'/></>}
                {classificacao ==  3 
                    && <><AiFillStar size={20} onClick={() => aoClassificar(id,0)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,1)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,2)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,4)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,5)} color='gold'/></>}
                {classificacao ==  4 
                    && <><AiFillStar size={20} onClick={() => aoClassificar(id,0)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,1)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,2)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,3)} color='gold'/>
                         <AiOutlineStar size={20} onClick={() => aoClassificar(id,5)} color='gold'/></>}
                {classificacao ==  5 
                    && <><AiFillStar size={20} onClick={() => aoClassificar(id,0)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,1)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,2)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,3)} color='gold'/>
                         <AiFillStar size={20} onClick={() => aoClassificar(id,4)} color='gold'/></>}
                        
                {favorito 
                    ? <AiFillHeart size={25} onClick={favoritar} color='red'/> 
                    : <AiOutlineHeart size={25} onClick={favoritar} color='red'/>}
            </div>
        </div>
    </div>)
}

export default Colaborador