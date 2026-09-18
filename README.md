✦ Formulário de Cadastro de Livros em React ✦

Projeto desenvolvido para a disciplina de Programação para Internet, como atividade prática sobre Componentes, Props e Estado com React.

A aplicação apresenta um formulário para cadastro de livros, utilizando componentes reutilizáveis, useState para gerenciamento dos dados e renderização dinâmica da lista de livros cadastrados.

✧ Tecnologias Utilizadas

React

JavaScript

CSS

Vite

✧ Screenshots
Formulário de Cadastro

✧ Funcionalidades

Formulário para cadastro de livros

Campos para título, autor, ano de publicação e gênero

Uso de useState para controlar os campos do formulário

Componentes reutilizáveis

Renderização da lista de livros cadastrados

Identificador próprio para cada livro

Limpeza dos campos após o cadastro

Mensagem exibida quando nenhum livro foi cadastrado

✧ Estrutura do Projeto
exercicio-formulario/
├── src/
│   ├── components/
│   │   ├── CampoTexto.jsx
│   │   ├── CampoTexto.css
│   │   ├── Livro.jsx
│   │   ├── FormularioLivro.jsx
│   │   └── FormularioLivro.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── imagens/
│   └── cadastro-livro.png
├── package.json
└── vite.config.js

✧ Campos do Formulário

Título — Nome do livro

Autor — Autor do livro

Ano de publicação — Ano em que o livro foi publicado

Gênero — Gênero literário do livro

✧ Comportamentos

Cada campo do formulário possui seu próprio estado utilizando useState.

Ao clicar em Cadastrar, um novo livro é adicionado à lista.

Cada livro possui um identificador próprio.

Após o cadastro, os campos do formulário são limpos.

Caso nenhum livro esteja cadastrado, é exibida a mensagem "Nenhum livro cadastrado ainda."

✧ Como Executar o Projeto

Clone o repositório:

git clone URL_DO_REPOSITORIO


Acesse a pasta do projeto:

cd exercicio-formulario


Instale as dependências:

npm install


Execute o projeto:

npm run dev


Depois, acesse o endereço disponibilizado pelo Vite no terminal.

✧ Objetivo da Atividade

O objetivo da atividade é praticar a criação de componentes reutilizáveis, o uso de props, o gerenciamento de estado com useState e a renderização de listas em uma aplicação React.