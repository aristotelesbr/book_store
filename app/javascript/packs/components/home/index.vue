<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <BookList :bookList="bookList"/>
      </v-flex>
      <v-flex xs3 offset-xs4>
        <ul class="pagination">
          <li><v-btn @click="prevPaginate()" v-if="this.paginateLinks.prev" class="primary dark">anterior &laquo;</v-btn></li>
          <li><v-btn @click="nextPaginate()" v-if="this.paginateLinks.next" class="primary dark">&raquo; proximo</v-btn></li>
          <li><NewBook /></li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import BookList from './_book_list'
import NewBook from './_create_book'

export default {
  name: "BookIndex",
  data() {
    return {
      book: {
        title: '',
        description: ''
      }
    }
  },
  components: {
    BookList,
    NewBook
  },
  computed: mapState({
    bookList: state => state.BookModule.bookList,
    paginateLinks: state => state.BookModule.paginateLinks,
    flashNotice: state => state.BookModule.flashNotice
  }),
  mounted() {
    this.$store.dispatch('BookModule/fetchBooks');
  },
  methods: {
    nextPaginate() {
      this.$store.dispatch('BookModule/nextPage', this.paginateLinks.next);
    },
    prevPaginate() {
      this.$store.dispatch('BookModule/prevPage', this.paginateLinks.prev);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
