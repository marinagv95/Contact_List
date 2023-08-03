# Projeto: Cadastro de Clientes e Contatos

Este é um projeto de uma aplicação web desenvolvida em JavaScript/TypeScript que permite o cadastro de clientes e seus contatos associados. A aplicação possui operações básicas de um CRUD (Create, Read, Update, Delete) para clientes e contatos, bem como a funcionalidade de gerar um relatório em tela ou exportá-lo em formato PDF contendo os dados do cliente e seus contatos vinculados.

## Tecnologias Utilizadas:

- JavaScript ou TypeScript
- Node.js (para o backend)
- React (para o frontend)
- Banco de dados (ex: PostgreSQL ou MongoDB)

## Configuração e Execução:

Certifique-se de ter o Node.js instalado em sua máquina. Siga as instruções abaixo para instalar e executar a aplicação:

### Backend:

1. Faça o clone deste repositório em seu ambiente Unix (Linux ou Mac OS X).
2. Navegue até o diretório do backend no terminal: `cd back`
3. Crie um arquivo `.env` no diretório do backend e configure as variáveis de ambiente necessárias, como as credenciais do banco de dados e outras configurações. Um exemplo de configuração pode ser encontrado em `.env.example`.
4. Instale as dependências do backend executando o comando: `npm install` ou `yarn install`
5. Execute o servidor backend com o comando: `npm start` ou `yarn start`

**Gerando e Rodando Migrações do Banco de Dados:**

O backend utiliza migrações de banco de dados para controlar as alterações no esquema. Aqui está como rodar ou gerar migrações:

##### Rodando Migrações Existentes:

1. Certifique-se de que o banco de dados esteja configurado corretamente no arquivo `.env`.
2. Execute as migrações existentes para atualizar o banco de dados: `npm run migrate` ou `yarn migrate`

##### Gerando Novas Migrações:

Se você fez alterações nos modelos de dados e deseja gerar uma nova migração:

1. Certifique-se de que as alterações nos modelos de dados estejam refletidas no código.
2. Gere uma nova migração: `npm run generate-migration NomeDaMigracao` ou `yarn generate-migration NomeDaMigracao`

Lembre-se de substituir `NomeDaMigracao` por um nome descritivo para a migração.

### Frontend:

1. Em outro terminal, navegue até o diretório do frontend: `cd front`
2. Instale as dependências do frontend executando o comando: `npm install` ou `yarn install`
3. Execute o frontend com o comando: `npm start` ou `yarn start`

Após seguir os passos acima, a aplicação estará disponível em seu navegador pelo endereço: [http://localhost:3000](http://localhost:3000).

## Estrutura de Rotas:

### Endpoints da API:

#### Clientes:

- POST `/users`: Página de cadastro de um novo cliente. Permite cadastrar um novo cliente no sistema.
- PATCH `/users/🆔`: Página de modificação de um cliente existente. Permite atualizar os dados de um cliente específico.
- DELETE `/users/🆔`: Página de deleção de um cliente existente. Permite excluir um cliente específico do sistema.
- GET `/users/🆔`: Página de detalhes de um cliente específico. Mostra os dados e contatos vinculados de um cliente específico.
- GET `/users`: Página de listagem de todos os clientes cadastrados. Mostra todos os clientes cadastrados no sistema.

#### Contatos:

- POST `/contacts`: Página de cadastro de um novo contato. Permite cadastrar um novo contato vinculado a um cliente.
- PATCH `/contacts/🆔`: Página de atualização de um contato existente. Permite atualizar os dados de um contato específico.
- DELETE `/contacts/🆔`: Página de deleção de um contato existente. Permite excluir um contato específico do sistema.
- GET `/contacts`: Página de listagem de contatos do usuário. Mostra todos os contatos cadastrados vinculados ao usuário.
- GET `/contacts/🆔`: Página de busca de um contato específico. Busca e mostra os detalhes de um contato específico pelo seu ID.
- GET `/users/:id/contacts`: Página de listagem de contatos do usuário. Mostra todos os contatos cadastrados vinculados ao usuário.
