import express from'express';
import graphqlHTTP from'express-graphql';
import mongoose from'mongoose';
import cors from 'cors';

import config from './config';
import schema from'./schema/';

const app = express();

app.use(cors())

mongoose.connect(config.database, { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('We have database'))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
 
app.listen(4000, () => console.log('We are ready here'))