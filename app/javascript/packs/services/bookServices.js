import Http from './http';

export default {
  fetchBooks() {
    return Http.get('/books')
  },
  deleteBook(id) {
    return Http.delete(`/books/${id}`)
  },
  paginate(url) {
    return Http.get(url)
  }
}
