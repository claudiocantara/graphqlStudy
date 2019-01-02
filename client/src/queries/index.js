import { gql } from 'apollo-boost';

const getBooksQuery = gql`{
    books {
        name
        genre
        id
        author {
           name
        }
    }
}`

const getAuthorsQuery = gql`{
    authors {
        name
        age
        books {
           name
           genre
        }
    }
}`

export { getAuthorsQuery, getBooksQuery }