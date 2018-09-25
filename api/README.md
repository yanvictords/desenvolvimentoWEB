# Antes de começar

Nosso curso tem como objetivo mostrar o funcionamento básico de uma API RESTful para ser consumida pelo nosso front-end

- Linguagem a ser utilizada: JavaScript
- Frameworks abordados: ExpressJS e Mongoose

## Ambientação

Para trabalharmos com o desenvolvimento em node, precisamos instalar o gerenciador de pacotes do Node, chamado de NPM. Segue aqui um [tutorial de instalação](https://www.npmjs.com/get-npm).

## Conceitos Importantes

### API RESTful
Uma API RESTful é uma arquitetura para interfaces que se baseia na ideia de ser stateless, ou seja, não há armazenação de estados. As requisições por si só devem ter toda a informação necessária para a comunicação entre as partes. Como estamos criando um serviço WEB, estaremos utilizando as operações do HTTP: GET, POST, PUT, PATCH e DELETE.

Rotas de APIs RESTful devem ser estruturadas de forma que seja de fácil entendimento e baseada nos recursos do banco de dados. Essas rotas podem executar ações no recurso ou definir o CRUD do recurso.

### CRUD

CRUD é o acrônimo para CREATE, READ, UPDATE and DELETE, que são as quatro operações executadas em um modelo de dados. Ao criar uma API RESTful, costuma ser necessário a criação as rotas das operações CRUD para que possamos manipular o banco de dados.

# Aula de Desenvolvimento Backend

## Setup
Para rodar nosso projeto, navegue até o diretório do projeto no seu Terminal

```
$ npm install
```

Para rodar o projeto em modo de desenvolvimento(com hot reload)
```
$ npm run dev
```

Para rodar o servidor em produção
```
$ node server.js
```

## Links de Referência

- [ExpressJS](http://expressjs.com/en/4x/api.html)
- [Mongoose](https://mongoosejs.com/docs/guide.html)

## O que foi feito aqui?
### 1. Criação do Projeto
```
$ npm init

```
Aqui utilizamos todas as opções padrão, porém substituímos o `index.js` por `server.js`

### 2. Instalação dos Pacotes necessários

Depois instalamos os pacotes necessários

```
$ npm install express mongoose body-parser cors
```

* Express: Framework para serviços wev
* Mongoose: Framework para acesso ao banco Mongo
* BodyParser: Middleware para definição do corpo da requisição HTTP
* CORS: Middleware para permitir requisições de qualquer origem

### 3. Configurando Hot-Reload

Um problema com o nosso projeto é que ao alterar algum arquivo, devemos levantar o serviço novamente. Para que isso não ocorra configuramos um hot-reload, ou seja, um carregamento rápido. Temos então que instalar o pacote `nodemon` em ambiente de desenvolvimento e configurar um script para rodá-lo.

```
$ npm install --save-dev nodemon
```
E no nosso arquivo `package.json` adicionamos a seguinte linha em scripts:

```
"dev": "nodemon server.js"
```

### 4. Levantando o serviço na porta 8000

Para que possamos rodar nossa API, precisamos que ela escute por requisições em uma porta. Escolhemos a porta 8000 para nosso exemplo

```javascript
const express = require('express')
const app = express()
// Escuta por requisições na porta
app.listen(8000, function() {
  console.log('Rodando serviço na porta 8000')
})
```

### 5. Configurando conexão com o MongoDB
No nosso arquivo `server.js` precisamos conectar nossa aplicação ao banco Mongo que criamos, para isso precisamos do seguinte código:

```javascript
const mongoose = require('mongoose')
let db_url = 'mongodb://<user>:<password>@<db_url>'
let mongoDB = db_url

mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
```

### 6. Configurando Middlewares

Para nossas requisições POST e PATCH que utilizam um body, é necessário definir qual tipo nosso serviço utilizará. Para isso precisamos do middleware `body-parser`. Ele insere no nosso objeto de request o body parseado de acordo com o especificado, para que possamos acessar o objeto resultante. Na nossa aplicação aceitaremos JSON e urlencoded.

```javascript
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
```

Além disso, precisamos configurar o CORS da nossa API, para que ela aceite requisições feitas por um JavaScript em uma origem diferente da do nosso servidor. Isso é necessário pois navegadores modernos impedem que o JavaScript faça requisições cross-domain, ou seja, em domínios diferentes. Isso é uma medida de segurança.

```javascript
// Enable cors
app.use(cors())
app.options('*', cors())
```

### 7. Seu serviço está rodando e está conectado ao seu banco MongoDB
Agora assim como aprendido em sala, configure seu Schema de dados e suas rotas
