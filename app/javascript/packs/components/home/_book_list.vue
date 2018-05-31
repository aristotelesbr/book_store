<template>
  <v-data-table
    :headers="headers"
    :items="bookList"
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
        ]
      }
    },
    props: ['bookList']
  }
</script>
<style lang="scss" scoped>
</style>
