import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: {
    type: Schema.Types.String,
    trim: true,
    minlength: 6,
    required: true
  },
  age: {
    type: Schema.Types.Number,
    required: true
  }
})

export default mongoose.model('Author', authorSchema);