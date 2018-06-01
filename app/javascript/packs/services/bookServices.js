import Http from './http';

export default {
  fetchBooks() {
    return Http.get('/books')
  }
}
