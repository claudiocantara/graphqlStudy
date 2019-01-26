import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const authorSchema = Schema({
    age: Number,
    name: String
})

export default mongoose.model('Author', authorSchema);