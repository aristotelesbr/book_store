<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="success" dark>Adicionar</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Adicionar Livro</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="book.title" label="Titulo" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="book.description" label="Descrição" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*Campos com asterisco são obrigatorios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addBook(book)">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'BookForm',
    data() {
      return {
        dialog: false,
        book: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      addBook() {
        this.$store.dispatch('BookModule/newBook', this.book);
        this.book = {}
        this.dialog = false
      }
    }
  }
</script>
<style lang="css">
</style>
