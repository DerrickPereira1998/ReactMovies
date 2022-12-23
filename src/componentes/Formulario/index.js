import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({cadastrarTime , aoCadastrar, categorias}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const [nomeCategoria, setNomeCategoria] = useState('')
    const [corCategoria, setCorCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            categoria
        })
        setNome('')
        setCargo('')
        setImagem('')
        setCategoria('')
    }

    return (
        <div className='background'>
            <section className="formulario-container">
                <form className='formulario' onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Campo 
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <Campo
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo" 
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <Campo
                        label="Imagem"
                        placeholder="Digite o endereço da imagem" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoria" 
                        itens={categorias}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
                <form className='formulario' onSubmit={(evento) => {
                    evento.preventDefault()
                    cadastrarTime({nome: nomeCategoria, cor: corCategoria})
                }}>
                    <h2>Preencha os dados para criar uma nova categoria</h2>
                    <Campo 
                        obrigatorio
                        label="Nome"
                        placeholder="Digite o nome da categoria" 
                        valor={nomeCategoria}
                        aoAlterado={valor => setNomeCategoria(valor)}
                    />
                    <Campo
                        obrigatorio
                        type='color'
                        label="Cor"
                        placeholder="Digite a cor da categoria" 
                        valor={corCategoria}
                        aoAlterado={valor => setCorCategoria(valor)}
                    />
                    <Botao>
                        Criar nova categoria
                    </Botao>
                </form>
            </section>
        </div>
    )
}

export default Formulario