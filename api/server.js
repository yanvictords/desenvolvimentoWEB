const express = require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router.js')

// Cria aplicação express
const app = express()

// Conecta o mongo a aplicação
let db_url = 'mongodb://admin:admin0@ds113693.mlab.com:13693/lojavirtual'
let mongoDB = db_url

mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Enable cors
app.use(cors())
app.options('*', cors())

// Define formatos de entrada do POST (MIDDLEWARE)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Define rotas
app.use('/', router)

// Error 404 Middleware
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Errors middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message
    }
  })
})

// Escuta por requisições na porta
app.listen(8000, function() {
  console.log('Rodando serviço na porta 8000')
})
