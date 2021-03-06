const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    id: Number,
    menu: [
      {
        dishes_id: Number,
        image: String,
        description: String,
      },
      {
        dishes_id: Number,
        image: String,
        description: String,
      },
      {
        dishes_id: Number,
        image: String,
        description: String,
      },
      {
        dishes_id: Number,
        image: String,
        description: String,
      },
    ]
  }
)

module.exports = mongoose.model('Menu', MenuSchema)


