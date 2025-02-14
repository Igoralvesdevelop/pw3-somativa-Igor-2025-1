import './App.css'

import BookCard from './components/BookCard'

import capa_livro1 from './assets/cavernas_aco.jpg'

import capa_livro2 from './assets/sol_desvelado.jpg'

function App() 
{


  return (
    <>
      <div>
        <h1>PW3 - WEB - LIVRARIA</h1>
              <BookCard 
              titulo='As Cavernas de Aço'
              autor='Isaac Azimov'
              imagem={capa_livro1}/>
              <BookCard 
              titulo='O Sol Desvelado'
              autor='Isaac Azimov'
              imagem={capa_livro2} />
              {/* <BookCard 
              titulo='O Fim da Imfancia'
              autor='Arthur C. Clark'
              imagem='Uma imagem vai aparecer aqui' />
              <BookCard 
              titulo='Neuromancer'
              autor='Willian Gibson'
              imagem='Uma imagem vai aparecer aqui' /> */}
      </div>
    </>
  )
}

export default App
