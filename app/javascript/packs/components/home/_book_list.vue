<template>
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
          { text: 'Data', value: 'created', sortable: false },
          { text: 'Autor', value: 'author', sortable: false },
        ]
      }
    },
    props: ['bookList']
  }
</script>
<style lang="scss" scoped>
</style>
