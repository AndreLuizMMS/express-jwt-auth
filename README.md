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

## Express JWT

### Grupo Admin

#### Obter Usuários

- URL: `http://localhost:1234/admin/users`
- Método: GET
- Descrição: Obter usuários
- Autenticação: Token de Portador (Bearer Token)

#### Definir como Administrador

- URL: `http://localhost:1234/admin/setAdmin`
- Método: POST
- Descrição: Definir usuário como administrador
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "targetUsername": "dave1"
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json
- Autenticação: Token de Portador (Bearer Token)

#### Definir como Editor

- URL: `http://localhost:1234/admin/setEditor`
- Método: POST
- Descrição: Definir usuário como editor
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "targetUsername": "dave1"
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json
- Autenticação: Token de Portador (Bearer Token)

### Grupo Employees

#### Obter Funcionários

- URL: `http://localhost:1234/employees`
- Método: GET
- Descrição: Obter funcionários
- Autenticação: Token de Portador (Bearer Token)

#### Criar Funcionário

- URL: `http://localhost:1234/employees`
- Método: POST
- Descrição: Criar um novo funcionário
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "firstname": "João",
      "lastname": "silva"
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json
- Autenticação: Token de Portador (Bearer Token)

#### Excluir Funcionário

- URL: `http://localhost:1234/employees`
- Método: DELETE
- Descrição: Excluir um funcionário
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "id": 1
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json
- Autenticação: Token de Portador (Bearer Token)

#### Atualizar Funcionário

- URL: `http://localhost:1234/employees`
- Método: PUT
- Descrição: Atualizar um funcionário
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "id": 0,
      "firstname": "João",
      "lastname": "silva"
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json
- Autenticação: Token de Portador (Bearer Token)

### Autenticação

#### Registrar

- URL: `http://localhost:1234/register`
- Método: POST
- Descrição: Registrar um novo usuário
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "user": "João",
      "pwd": "asdasd"
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json

#### Login

- URL: `http://localhost:1234/auth`
- Método: POST
- Descrição: Login do usuário
- Corpo:
  - MIME Type: application/json
  - Texto:
    ```json
    {
      "user": "João",
      "pwd": "asdasd"
    }
    ```
- Cabeçalhos:
  - Content-Type: application/json
- Autenticação: Token de Portador (Bearer Token)

#### Atualizar Token

- URL: `http://localhost:3500/refresh`
- Método: POST
- Descrição: Atualizar o token de acesso

#### Logout

- URL: `http://localhost:1234/logout`
- Método: GET
- Descrição: Logout do usuário

Observação: Os tokens de autenticação foram ocultados por motivos de segurança.



## Estrutura do Projeto

A estrutura do projeto segue o padrão MVC (Model-View-Controller):

- `server.js`: Ponto de entrada da aplicação.
- `config/`: Arquivos de configuração.
- `controllers/`: Controladores responsáveis pela lógica de cada rota.
- `middlewares/`: Funções de middleware personalizadas.
- `models/`: Modelos .json que representam as estruturas de dados.
- `routes/`: Definições das rotas.
- `utils/`: Funções de utilidade.


## Insomnia Collection

[![Download File](https://insomnia.rest/images/run.svg)](https://github.com/AndreLuizMMS/express-jwt-auth/blob/50dac9a88e4b33951fa1bc75cc0623c6405214bf/InsomniaCollection.json)


