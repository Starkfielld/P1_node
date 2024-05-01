Paulo Roberto  - 202010762

API de Cadastro e Autenticação JWT
Este é um exemplo de uma API simples para cadastro de usuários e autenticação usando JSON Web Tokens (JWT). O projeto foi desenvolvido com Node.js e Express.

Funcionalidades
Cadastro de usuários
Autenticação de usuários com JWT

Configuração
Instalação das Dependências: Primeiro, certifique-se de ter o Node.js e o npm instalados em sua máquina.
Configuração do Banco de Dados: Você precisará configurar um banco de dados MongoDB. Na pasta database/index.js.
Gerar Chave Secreta JWT: No arquivo auth.json da pasta config, gere uma chave secreta para assinar os tokens JWT.
Execução do Servidor: Depois de configurar o banco de dados e a chave secreta

Rotas
Cadastro de Usuários
POST /auth/registro Cria um novo usuário com os campos name, email e password

Autenticação JWT
POST /auth/autenticacao um usuário existente e retorna um token JWT válido

Testes

Para testar as funcionalidades da API, você pode usar ferramentas como o Postman