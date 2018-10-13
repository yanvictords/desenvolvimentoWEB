const schema = require('./schema.js')

module.exports = {
  home (req, res) {
    res.send('Welcome to our API')
  },
  // LOGIN
  login (req, res, next) {
    let { email, password } = req.body
    schema.UserSchema.find({ email: email, password: password }, (err, user) => {
      if (err) return next(err)
      if (user.length === 0) res.status(404).send({ error: "Erro ao fazer o login" })
      res.status(201).json(user[0])
    })
  },
  // CREATE USER
  createUser (req, res, next) {
    let user = new schema.UserSchema(req.body)
    user.save((err, user) => {
      if (err) return next(err)

      res.status(201).json(user)
    })
  },
  // READ USER
  getUsers (req, res, next) {
    let where = req.query['where'] ? JSON.parse(req.query['where']) : {}

    schema.UserSchema.find(where).sort({ createdAt: -1 }).exec( (err, users) => {
      if (err) return next(err)

      res.json(users)
    })
  },
  getUser (req, res, next) {
    schema.UserSchema.findById(req.params._id, (err, user) => {
      if (err) return next(err)
      if (!user) {
        err = new Error('User not found')
        err.status = 404
        return next(err)
      } else {
        res.json(user)
      }
    })
  },
  getUserByEmail (req, res, next) {
    schema.UserSchema.find({email: req.params._email}, (err, user) => {
      if (err) return next(err)
      if (!user) {
        err = new Error('User not found')
        err.status = 404
        return next(err)
      } else {
        res.json(user)
      }
    })
  },
  // UPDATE USER
  updateUser (req, res, next) {
    schema.UserSchema.findByIdAndUpdate(req.params._id, { $set: req.body}, { new: true }, (err, user) => {
      if (err) return next(err)
      if (!user) {
        err = new Error('User not found')
        err.status = 404
        return next(err)
      } else {
        res.json(user)
      }
    })
  },
  // DELETE USER
  deleteUser (req, res, next) {
    schema.UserSchema.findByIdAndDelete(req.params._id, (err, user) => {
      if (err) return next(err)
      if (!user) {
        err = new Error('User not found')
        err.status = 404
        return next(err)
      } else {
        res.status(204).send()
      }
    })
  },

// === PRODUCT SECTION

  // CREATE PRODUCT
  createProduto (req, res, next) {
    let produto = new schema.ProdutoSchema(req.body)
    // produto.valor = 3000
    produto.save((err, produto) => {
      if (err) return next(err)

      res.status(201).json(produto)
    })
  },
  // READ PRODUCT
  getProdutos (req, res, next) {
    let where = req.query['where'] ? JSON.parse(req.query['where']) : {}

    schema.ProdutoSchema.find(where).sort({ createdAt: -1 }).exec( (err, produtos) => {
      if (err) return next(err)

      res.json(produtos)
    })
  },
  getProduto (req, res, next) {
    schema.ProdutoSchema.findById(req.params._id, (err, produto) => {
      if (err) return next(err)
      if (!produto) {
        err = new Error('Product not found')
        err.status = 404
        return next(err)
      } else {
        res.json(produto)
      }
    })
  },
  // UPDATE PRODUCT
  updateProduto (req, res, next) {
    schema.ProdutoSchema.findByIdAndUpdate(req.params._id, { $set: req.body}, { new: true }, (err, produto) => {
      if (err) return next(err)
      if (!produto) {
        err = new Error('Product not found')
        err.status = 404
        return next(err)
      } else {
        res.json(produto)
      }
    })
  },
  // DELETE PRODUCT
  deleteProduto (req, res, next) {
    schema.ProdutoSchema.findByIdAndDelete(req.params._id, (err, produto) => {
      if (err) return next(err)
      if (!produto) {
        err = new Error('Product not found')
        err.status = 404
        return next(err)
      } else {
        res.status(204).send()
      }
    })
  }
}
