const mongoose = require('mongoose')
const Schema = mongoose.Schema

// UserSchema
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    age: Number,
    pictureUrl: String,
    gender: { type: String, enum: ['Male', 'Female', 'Other'] }
  },
  {
    timestamps: true
  })

// ProdutoSchema
const ProdutoSchema = new Schema(
  {
    nome: String,
    dono: String,
    descricao: String,
    valor: Number,
    pictureUrl: String 
  },
  {
    timestamps: true
  })

// ProductSchema

module.exports = {
  UserSchema: mongoose.model('User', UserSchema),
  ProdutoSchema: mongoose.model('Produto', ProdutoSchema)
}
