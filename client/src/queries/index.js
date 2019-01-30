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

const getAuthorsList = gql`{
  authors {
      id
      name
  }
}`

const saveBook = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
        id
    }
  }`;

export { getAuthorsQuery, getBooksQuery, getAuthorsList, saveBook }