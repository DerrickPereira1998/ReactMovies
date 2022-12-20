import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [times,setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'Derrick',
      cargo: 'Desenvolvedor',
      imagem:'https://github.com/DerrickPereira1998.png',
      time: times[0].nome,
      favorito: false
    }
  ])

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id ))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
        return time //Sempre retorne algo se nao quizer pegar erro de array undefined
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()} ])//Os tres pontinhos pegam o array completo, o novo item entao é somado ao array
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito 
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>

      {times.map((time,indice) => <Time 
        mudarCor = {mudarCorDoTime}
        key={indice} 
        time={time} 
        colaboradores={colaboradores.filter
          (colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        aoFavoritar={resolverFavorito}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
