function Livro({ livro }) {
  return (
    <li className="livro">
      <strong>{livro.titulo}</strong> — {livro.autor} — {livro.ano} —{' '}
      {livro.genero}
    </li>
  )
}

export default Livro