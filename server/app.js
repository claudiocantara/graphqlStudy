const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/');

const app = express();

app.use(cors())

mongoose.connect('mongodb://arngrim:arngrim123@ds147354.mlab.com:47354/graphql_test', { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('We have database'))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
 
app.listen(4000, () => console.log('We are ready here'))