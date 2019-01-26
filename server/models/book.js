import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = Schema({
    name: String,
    genre: String,
    authorId: String
})

export default mongoose.model('Book', bookSchema);