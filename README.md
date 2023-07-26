Projeto: Cadastro de Clientes e Contatos

Este é um projeto de uma aplicação web desenvolvido em JavaScript/TypeScript que permite o cadastro de clientes e seus contatos associados. A aplicação possui operações básicas de um CRUD (Create, Read, Update, Delete) para clientes e contatos, bem como a funcionalidade de gerar um relatório em tela ou exportá-lo em formato PDF contendo os dados do cliente e seus contatos vinculados.

Tecnologias Utilizadas:

JavaScript ou TypeScript
Node.js (para o backend)
React (para o frontend)
Banco de dados (ex: PostgreSQL ou MongoDB)
Configuração e Execução:

Certifique-se de ter o Node.js instalado em sua máquina.
Faça o clone deste repositório em seu ambiente Unix (Linux ou Mac OS X).
Navegue até o diretório do projeto no terminal.
Instale as dependências do backend executando o comando: npm install ou yarn install.
Instale as dependências do frontend executando o comando: cd frontend e depois npm install ou yarn install.
Execute o servidor backend com o comando: npm start ou yarn start.
Em outro terminal, dentro do diretório do projeto, execute o frontend com o comando: cd frontend e depois npm start ou yarn start.
Acesse a aplicação em seu navegador pelo endereço: http://localhost:3000.
Estrutura de Rotas:

## Endpoints da API

### /users (POST)

- **Descrição**: Página de cadastro de um novo cliente.
- **Funcionalidade**: Permite cadastrar um novo cliente no sistema.

### /users/:id (PATCH)

- **Descrição**: Página de modificação de um cliente existente.
- **Funcionalidade**: Permite atualizar os dados de um cliente específico.

### /users/:id (DELETE)

- **Descrição**: Página de deleção de um cliente existente.
- **Funcionalidade**: Permite excluir um cliente específico do sistema.

### /users/:id (GET)

- **Descrição**: Página de detalhes de um cliente específico.
- **Funcionalidade**: Mostra os dados e contatos vinculados de um cliente específico.

### /users (GET)

- **Descrição**: Página de listagem de todos os usuários cadastrados.
- **Funcionalidade**: Mostra todos os clientes cadastrados no sistema.

### /contacts (POST)

- **Descrição**: Página de cadastro de um novo contato.
- **Funcionalidade**: Permite cadastrar um novo contato vinculado a um cliente.

### /contacts/:id (PATCH)

- **Descrição**: Página de atualização de um contato existente.
- **Funcionalidade**: Permite atualizar os dados de um contato específico.

### /contacts/:id (DELETE)

- **Descrição**: Página de deleção de um contato existente.
- **Funcionalidade**: Permite excluir um contato específico do sistema.

### /contacts (GET)

- **Descrição**: Página de listagem de contatos do usuário.
- **Funcionalidade**: Mostra todos os contatos cadastrados vinculados ao usuário.

### /contacts/:id (GET)

- **Descrição**: Página de busca de um contato específico.
- **Funcionalidade**: Busca e mostra os detalhes de um contato específico pelo seu ID.




