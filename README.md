Projeto: Cadastro de Clientes e Contatos
Este é um projeto de uma aplicação web desenvolvido em JavaScript/TypeScript que permite o cadastro de clientes e seus contatos associados. A aplicação possui operações básicas de um CRUD (Create, Read, Update, Delete) para clientes e contatos, bem como a funcionalidade de gerar um relatório em tela ou exportá-lo em formato PDF contendo os dados do cliente e seus contatos vinculados.

Tecnologias Utilizadas:
JavaScript ou TypeScript
Node.js (para o backend)
React (para o frontend)
Banco de dados (ex: PostgreSQL ou MongoDB)
Configuração e Execução:
Certifique-se de ter o Node.js instalado em sua máquina. Siga as instruções abaixo para instalar e executar a aplicação:

Backend:
Faça o clone deste repositório em seu ambiente Unix (Linux ou Mac OS X).
Navegue até o diretório do projeto no terminal.
Instale as dependências do backend executando o comando:

npm install
ou

yarn install
Execute o servidor backend com o comando:
sql

npm start
ou
sql

yarn start
Frontend:
Em outro terminal, dentro do diretório do projeto, acesse a pasta front:
bash

cd front
Instale as dependências do frontend executando o comando:

npm install
ou

yarn install
Execute o frontend com o comando:
sql

npm start
ou
sql

yarn start
Após seguir os passos acima, a aplicação estará disponível em seu navegador pelo endereço: http://localhost:3000.

Estrutura de Rotas:
Endpoints da API:

Clientes:
POST /users: Página de cadastro de um novo cliente. Permite cadastrar um novo cliente no sistema.
PATCH /users/:id: Página de modificação de um cliente existente. Permite atualizar os dados de um cliente específico.
DELETE /users/:id: Página de deleção de um cliente existente. Permite excluir um cliente específico do sistema.
GET /users/:id: Página de detalhes de um cliente específico. Mostra os dados e contatos vinculados de um cliente específico.
GET /users: Página de listagem de todos os clientes cadastrados. Mostra todos os clientes cadastrados no sistema.
Contatos:
POST /contacts: Página de cadastro de um novo contato. Permite cadastrar um novo contato vinculado a um cliente.
PATCH /contacts/:id: Página de atualização de um contato existente. Permite atualizar os dados de um contato específico.
DELETE /contacts/:id: Página de deleção de um contato existente. Permite excluir um contato específico do sistema.
GET /contacts: Página de listagem de contatos do usuário. Mostra todos os contatos cadastrados vinculados ao usuário.
GET /contacts/:id: Página de busca de um contato específico. Busca e mostra os detalhes de um contato específico pelo seu ID.
GET /users/:id/contacts: Página de listagem de contatos do usuário. Mostra todos os contatos cadastrados vinculados ao usuário.
Certifique-se de seguir as etapas de configuração e execução descritas acima para garantir que a aplicação funcione corretamente em seu ambiente. Agora outras pessoas que acessarem o seu projeto serão capazes de executá-lo com as instruções fornecidas.
