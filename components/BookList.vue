<template>
  <v-container>
    <v-row>
      <BookItem v-for='book in books'
                :book='book'
                :key='book.id'
                @openBook='dialogVisible = true' />
    </v-row>
    <BookDialog v-model='dialogVisible'
                :book='getCurrentBook' />
  </v-container>
</template>

<script>
import BookItem from './BookItem'
import BookDialog from './BookDialog'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'BookList',
  components: { BookItem, BookDialog },
  props: ['books'],

  data: () => ({
    dialogVisible: false
  }),
  computed: {
    ...mapGetters('book', ['getCurrentBook'])
  },
  methods: {
    ...mapMutations('book', ['setLoadingFalse'])
  }
}
</script>

<style scoped>

</style>
