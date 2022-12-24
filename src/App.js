import './App.css';
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Categoria from './componentes/Categoria';
import Navbar from './componentes/Navbar';
import { v4 as uuidv4 } from 'uuid'
function App() {

  const [categorias,setCategorias] = useState([
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

  const [filmes, setFilmes] = useState([
    {
      id: uuidv4(),
      nome: 'Derrick',
      cargo: 'Desenvolvedor',
      imagem:'https://github.com/DerrickPereira1998.png',
      categoria: categorias[0].nome,
      favorito: false,
      classificacao: false
    }
  ])

  function deletarFilme(id) {
    setFilmes(filmes.filter(filme => filme.id !== id ))
  }

  function mudarCorDaCategoria(cor, id) {
    setCategorias(categorias.map(categoria => {
      if(categoria.id === id){
        categoria.cor = cor
      }
        return categoria //Sempre retorne algo se nao quizer pegar erro de array undefined
    }))
  }

  function cadastrarCategoria(novaCategoria){
    setCategorias([...categorias, {...novaCategoria, id: uuidv4()} ])//Os tres pontinhos pegam o array completo, o novo item entao é somado ao array
  }

  function resolverFavorito(id){
    setFilmes(filmes.map(filme => {
      if(filme.id === id){
        filme.favorito = !filme.favorito 
      }
      return filme
    }))
  }

  function classificarFilme(id){
    setFilmes(filmes.map(filme => {
      if(filme.id == id){
        filme.classificacao = !filme.classificacao
      }
      return filme
    }))
  }

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Formulario 
        cadastrarCategoria={cadastrarCategoria}
        categorias={categorias.map(categoria => categoria.nome)} 
        aoCadastrar={filme => setFilmes([...filmes, filme])}/>

      {categorias.map((categoria,indice) => <Categoria 
        mudarCor = {mudarCorDaCategoria}
        key={indice} 
        categoria={categoria} 
        filmes={filmes.filter
          (filme => filme.categoria === categoria.nome)}
        aoDeletar={deletarFilme}
        aoFavoritar={resolverFavorito}
        aoClassificar={classificarFilme}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
