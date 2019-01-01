const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = Schema({
    id: String,
    age: Number,
    name: String
})

module.exports = mongoose.model('Author', authorSchema);