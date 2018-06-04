<template>
  <v-layout row wrap justify-center>
    <BookList :bookList="bookList"/>
    <v-flex xs4 offset-xs1>
      <ul class="pagination">
        <li><v-btn @click="prevPaginate()" v-if="this.paginateLinks.prev" class="primary dark">anterior &laquo;</v-btn></li>
        <li><v-btn @click="nextPaginate()" v-if="this.paginateLinks.next" class="primary dark">&raquo; priximo</v-btn></li>
      </ul>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex';
import BookList from './_book_list'
import Http from '../../services/http.js'

export default {
  name: "BookIndex",
  data() {
    return {
    }
  },
  components: {
    BookList
  },
  computed: mapState({
    bookList: state => state.BookModule.bookList,
    paginateLinks: state => state.BookModule.paginateLinks
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
