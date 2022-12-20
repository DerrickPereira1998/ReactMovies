import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({cadastrarTime , aoCadastrar, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
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
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form className='formulario' onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario