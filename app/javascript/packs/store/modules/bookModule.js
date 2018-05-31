const BookModule = {
  namespaced: true,
  // Somente leitura para os componentes
  state: {
    bookList: [{
      code: '123',
      title: 'Sitio do Picapal amarelo',
      date: new Date(),
      author: 1,
    },
    {
      code: '1111',
      title: 'Santa monica',
      date: new Date(),
      author: 1,
    },
    {
      code: '222',
      title: 'O conde de monte cristo',
      date: new Date(),
      author: 1,
    }]
  },
  // Altera o state
  multations: {
  },
  // Metodos chamam as multations
  actions: {
  }
};

export default BookModule;
