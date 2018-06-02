<template>
  <v-container>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md12>
        <v-data-table
        :headers="headers"
        :items="bookList"
        hide-actions
        class="elevation-1"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.attributes.title }}</td>
          <td>{{ props.item.attributes.created }}</td>
          <td>{{ props.item.attributes.author }}</td>
          <td class="justify-center px-0">
            <v-btn icon class="mx-0">
              <BookDetail :book="props.item"/>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BookDetail from './_book_detail'

  export default {
    data () {
      return {
        headers: [
          {
            text: 'ISBN',
            align: 'left',
            sortable: false,
            value: 'code'
          },
          { text: 'Título', value: 'title', sortable: false },
          { text: 'Data', value: 'created', sortable: false },
          { text: 'Autor', value: 'author', sortable: false },
          { text: 'Ações', value: 'code', sortable: false }
        ]
      }
    },
    methods: {
      deleteItem(item) {
        this.$store.dispatch('BookModule/deleteBook', item.id);
        this.$store.dispatch('BookModule/fetchBooks');
      }
    },
    components: {
      BookDetail
    },
    props: ['bookList']
  }
</script>
<style lang="scss" scoped>
</style>
