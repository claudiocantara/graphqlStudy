import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = Schema({
    name: {
      type: Schema.Types.String,
      trim: true,
      minlength: 6
    },
    genre: {
      type: Schema.Types.String,
      trim: true,
      minlength: 1
    },

    authorId: {
      type: Schema.Types.String,
      trim: true,
      minlength: 10
    }
})

export default mongoose.model('Book', bookSchema);