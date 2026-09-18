✦ Formulário de Cadastro de Livros em React ✦

Projeto desenvolvido para a disciplina de Programação para Internet, como atividade prática sobre Componentes, Props e Estado com React.

A aplicação consiste em um formulário para cadastro de livros, utilizando componentes reutilizáveis, useState para gerenciamento dos dados e renderização dinâmica da lista de livros cadastrados.

✧ Tecnologias Utilizadas

React

JavaScript

CSS

Vite

✧ Screenshots
Formulário de Cadastro

Formulário de cadastro de livros

(adicione aqui o print da aplicação)

Livros Cadastrados

Lista de livros cadastrados

![Tela de cadastro de livros](./screenshots/cadastro-livro.png)


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
├── package.json
└── vite.config.js

✧ Campos do Formulário

Título — Nome do livro

Autor — Autor do livro

Ano de publicação — Ano em que o livro foi publicado

Gênero — Gênero literário do livro

✧ Como Executar o Projeto

Clone o repositório:

git clone URL_DO_REPOSITORIO


Acesse a pasta do projeto:

cd exercicio-formulario


Instale as dependências:

npm install


Execute o projeto:

npm run dev


Após executar, acesse o endereço informado pelo Vite no terminal.

✧ Objetivo da Atividade

A atividade tem como objetivo praticar a criação de componentes reutilizáveis, o uso de props, o gerenciamento de estado com useState e a renderização de listas em uma aplicação React.