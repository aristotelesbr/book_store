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
      console.log(books);
    }
  },
  // Metodos chamam as multations
  actions: {
    fetchBooks(context) {
      Services.BookServices.fetchBooks()
        .then(books => {
          context.commit('setBookList', books.data )
        }).catch((e)  => {
        console.log(e)
      })
    }
  }
};

export default BookModule;
