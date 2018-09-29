# Aula de Desenvolvimento em Vue

## Setup
Instalação do Vue:
(o $ serve para indicar que é um comando)
```
$ npm install -g vue
$ npm install -g @vue/cli
```

Para rodar nosso projeto, navegue até o diretório do projeto no seu Terminal

```
$ npm install
```

Para compilar o código e rodar ele em uma página do seu Browser
```
$ npm run serve
```

Para construir o projeto para Produção, ou seja, versão definitiva
```
$ npm run build
```

## Links de Referência

- [Vue](https://br.vuejs.org/index.html)

## O que foi feito aqui?
### 1. Criação do Projeto
```
$ vue create vuejs

Vue CLI v3.0.3
? Please pick a preset:
  default (babel, eslint)
❯ Manually select features
```
Selecionamos as seguintes features: Babel, Router
```
Vue CLI v3.0.3
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◯ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```
Aqui está a configuração do nosso projeto
```
Vue CLI v3.0.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
```

### 2. Instalação do Axios
Instalamos essa ferramenta para podermos fazer requisições para a nossa API seguindo o protocolo HTTP
```
$ npm install axios
```

### 3. Criação da camada de comunicação com a API
Criamos a pasta para a comunicação com a nossa API usando o Axios. Para isso, criamos uma pasta `src/api`
com um arquivo `index.js`

```javascript
import axios from 'axios'

// api - vai ser agora uma instância do Axios. Poderemos adicionar configurações especiais para ela
// tais como uma url de base, que será a que faremos nossa comunicação com o backend
let api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default {
  // aqui vamos inserir nossos métodos
}
```

### 4. Modificamos os arquivos existentes e criamos nossos componentes, assim como ensinamos em sala de aula
