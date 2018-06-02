<template>
  <div>
    <BookList :bookList="bookList"/>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import BookList from './_book_list'
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
    bookList: state => state.BookModule.bookList
  }),
  mounted() {
    this.$store.dispatch('BookModule/fetchBooks');
  }
}
</script>
<style lang="scss" scoped>
</style>
