<template>
  <div>
    <BookList :bookList="bookList"/>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
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
  })
}
</script>
<style lang="scss" scoped>
</style>
