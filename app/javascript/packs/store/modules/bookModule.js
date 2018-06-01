import Services from '../../services';
const BookModule = {
  namespaced: true,
  // Somente leitura para os componentes
  state: {
    bookList: []
  },
  // Altera o state
  mutations: {
    setBookList(state, books) {
      state.bookList = books.data;
      console.log(books.data);
    }
  },
  // Metodos chamam as multations
  actions: {
    fetchBooks(context) {
      Services.BookServices.fetchBooks()
        .then(response => response.data)
        .then(books => {
          context.commit('setBookList', books)
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
};

export default BookModule;
