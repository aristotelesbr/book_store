import Services from '../../services';
const BookModule = {
  namespaced: true,
  // State é somente leitura
  state: {
    bookList: [],
    paginateLinks: {}
  },
  mutations: {
    setBookList(state, books) {
      state.bookList = books.data;
    },
    setPaginateLinks(state, payload) {
      state.paginateLinks = payload.links;
    },
    setNextPage(state, payload){
      state.bookList = payload.data;
    },
    setPrevPage(state, payload){
      state.bookList = payload.data;
    }
  },
  actions: {
    fetchBooks(context) {
      Services.BookServices.fetchBooks()
        .then(books => {
          context.commit('setBookList', books.data)
          context.commit('setPaginateLinks', books.data)
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
    },
    nextPage(context, payload){
      Services.BookServices.paginate(payload)
      .then(resp => {
        context.commit('setNextPage', resp.data)
        context.commit('setPaginateLinks', resp.data)
      })
    },
    prevPage(context, payload){
      Services.BookServices.paginate(payload)
      .then(resp => {
        context.commit('setPrevPage', resp.data)
        context.commit('setPaginateLinks', resp.data)
      })
    }
  }
};

export default BookModule;
