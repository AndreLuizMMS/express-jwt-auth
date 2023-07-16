# Autenticação JWT com Node.js e Express

Este é um projeto Node.js construído com Express que demonstra a autenticação JWT (JSON Web Token).

## Recursos

- Registro de usuário com armazenamento de senha criptografada
- Login de usuário e geração de JWT
- Rotas protegidas usando autenticação JWT
- Middleware de tratamento de erros
- Rotas de exemplo para fins de demonstração

## Pré-requisitos

- Node.js v16.20.1

## Começando

1. Clone o repositório:

  ```shell
   git clone https://github.com/seu-usuario/node-express-jwt-auth.git
  ```
2. Instale as dependências:
  ```shell
  cd express-jwt-auth
  npm install
  ```   
3. Configure as variáveis de ambiente:
 - Crie um arquivo .env na raiz do projeto.  
```shell
ACCESS_TOKEN_SECRET=5e6d9c9e8ae426f47dc500318c5a30d56c164e91128bddb6dd4f30be51fddf85804e0bd22f8fbf93d8d158ce1938ba7a8bd61f4c6f256e6c46c62f7b96413d01
REFRESH_TOKEN_SECRET=2631c5419dac4c6c205c079a01b0b5985f788e1492275ab8321cbb5468fdb039411152603adccfa56d7b2fcec1be333f1489ceb020030123ff515e428ea9342f
```
4. Inicie a aplicação
  ```shell
  npm start
  ``` 
 - A aplicação deve estar em execução em http://localhost:1234.  

## Uso

- Registrar um novo usuário:
  - `POST /register`
  - Corpo da requisição:
    ```json
    {
      "user": "seu-nome-de-usuario",
      "pwd": "sua-senha"
    }
    ```

- Fazer login com um usuário existente:
  - `POST /login`
  - Corpo da requisição:
    ```json
    {
      "user": "seu-nome-de-usuario",
      "pwd": "sua-senha"
    }
    ```
  - A resposta incluirá um token JWT.

- Acessar rotas protegidas:
  - Inclua o token JWT no cabeçalho `Authorization` das requisições subsequentes:
    ```
    Authorization: Bearer seu-token-jwt
    ```


## Estrutura do Projeto

A estrutura do projeto segue o padrão MVC (Model-View-Controller):

- `server.js`: Ponto de entrada da aplicação.
- `config/`: Arquivos de configuração.
- `controllers/`: Controladores responsáveis pela lógica de cada rota.
- `middlewares/`: Funções de middleware personalizadas.
- `models/`: Modelos .json que representam as estruturas de dados.
- `routes/`: Definições das rotas.
- `utils/`: Funções de utilidade.
