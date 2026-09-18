import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [ano, setAno] = useState('')
  const [genero, setGenero] = useState('')

  const [livros, setLivros] = useState([])

  function handleSubmit(evento) {
    evento.preventDefault()

    const novoLivro = { titulo, autor, ano, genero }
    setLivros([...livros, novoLivro])

    setTitulo('')
    setAutor('')
    setAno('')
    setGenero('')
  }

  return (
    <section className="formulario-livro">
      <h1>Cadastro de Livro</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Título"
          name="titulo"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Ex: Devoradores de Estrelas"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          value={autor}
          onChange={(evento) => setAutor(evento.target.value)}
          placeholder="Ex: Andy Weir"
        />

        <CampoTexto
          label="Ano"
          name="ano"
          value={ano}
          onChange={(evento) => setAno(evento.target.value)}
          placeholder="Ex: 2021"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          value={genero}
          onChange={(evento) => setGenero(evento.target.value)}
          placeholder="Ex: Ficção científica"
        />
          
        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>Livros cadastrados</h2>

        {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

        <ul>
          {livros.map((livro) => (
            <Livro key={livro.titulo} livro={livro} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FormularioLivro
