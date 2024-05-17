# Universo Cinematográfico Marvel - Website

## Desenvolvido com React + TypeScript + Vite

Consiste em um site responsivo e performático para que fãs das obras da Marvel possam criar sua conta e visualizar informações dos Personagens, Filmes e HQ's.

Este projeto React foi iniciado com Vite, desenvolvido com Typescript, estilizado com Styled-Components.

O usuário pode criar sua conta utilizando um nome, senha e opcionalmente uma imagem de perfil. Todo este processo de Autenticação, login, recuperação de senha e criação de conta é feito com o uso do **Local Storage**, simulando uma API.
As informações dos personagens e dos hq's estão integradas com a <b><a href="https://developer.marvel.com/">**api da Marvel**</a></b>, porém, como ela não fornece tradução das informações, elas estão sendo traduzidas com a api do Google <b><a href="https://cloud.google.com/translate/docs/reference/rest">Cloud Translation API</a></b>.
As informações dos filmes da Marvel não são fornecidas pela sua api, portanto utilizamos a <a href="https://developer.themoviedb.org/reference/intro/getting-started">**api do TMDB**</a>.
O consumo das Api's são feitos com a lib **Axios**.
O projeto conta com um gerenciamento de estados utilizando ContextAPI, elevando somente os dados que serão consumidos de forma universal na aplicação, evitando problemas como Prop Drilling, e garantindo uma melhor performance, código mais limpo e estruturado, e uma melhor comunicação entre os componentes.
Antes de rodar o projeto, adicione o arquivo **.env** para conectar as requisições com as variáveis de ambiente.
Após adicionar o arquivo **.env** e instalar as dependências, podemos rodar o projeto acessar localhost:5173, você será redirecionado para a tela de login, para logar ou criar uma conta. Feito isso, você será redirecionado para a tela interna e terá acesso aos conteúdos da **MCU(Marvel Cinematic Universe)**.

O site foi desenvolvido focado em detalhes para que o usuário possa ter uma boa experiência, design atraente, como proposto pelo design do **Mestres da Web**.

## Que tal conferirmos como ficou o resultado? Segue os passos para rodar o projeto front-end na sua máquina e conectar com as Api's.

## No final deste passo a passo você verá como acessar a documentação do projeto com Storybook.

## Passos para rodar este Front-end no seu computador

### Pré-requisitos

- Node: >= 18
- NPM: >= 8.0.0
- Framework: React

### 1 - Clonando o repositório

```bash
git clone git@github.com:victor-figueiredo/mcu-website-mdw.git
cd mcu-website-mdw
```

### 2 - Baixar e instalar as dependências

```bash
yarn
```

### 3 - Iniciar o servidor

```bash
yarn dev
```

## Acessar a documentação com Storybook

```bash
yarn storybook
# Abrirá a documentação em um link **localhost:6006**
```

#### 👋 Eu, Victor Figueiredo, sou grato a Mestres da Web pela oportunidade, conhecer um pouco desta empresa e poder participar deste processo é muito satisfatório.
