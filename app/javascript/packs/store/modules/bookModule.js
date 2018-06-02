import Services from '../../services';
const BookModule = {
  namespaced: true,
  // State é somente leitura
  state: {
    bookList: []
  },
  // Mutations alteram o state
  mutations: {
    setBookList(state, books) {
      state.bookList = books.data;
    }
  },
  // Actions chamam as multations
  actions: {
    fetchBooks(context) {
      Services.BookServices.fetchBooks()
        .then(books => {
          context.commit('setBookList', books.data)
        }).catch((e)  => {
        console.log(e)
      })
    },
    deleteBook(context, payload) {
      Services.BookServices.deleteBook(payload)
      .then(resp => {
        if (resp.status == 204) {
          Services.BookServices.fetchBooks()
          .then(books => {
            context.commit('setBookList', books.data)
          }).catch((e)  => {
            console.log(e)
          })
        } else {
          console.log(error);
        }
      })
    }
  }
};

export default BookModule;
