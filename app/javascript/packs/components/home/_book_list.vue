<template>
  <v-data-table
    :headers="headers"
    :items="books"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.code }}</td>
      <td>{{ props.item.title }}</td>
      <td>{{ props.item.date }}</td>
      <td>{{ props.item.author }}</td>
    </template>
  </v-data-table>
</template>
<script>
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
          { text: 'Data', value: 'date', sortable: false },
          { text: 'Autor', value: 'author', sortable: false },
        ],
        books: [
          {
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
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
