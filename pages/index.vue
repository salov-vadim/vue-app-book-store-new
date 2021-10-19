<template>
  <v-container class='my-7'>
    <SearchForm />

    <v-dialog v-model='getLoading' hide-overlay persistent width='500'>
      <v-card color='blue-grey darken-4' dark>
        <v-card-text class='text-center'>
          Поиск книг
          <v-progress-linear
            indeterminate
            color='teal'
            class='mb-0'
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div v-if='!getLoading'>
      <div v-if='getSearchBooks.length > 0'>
        <v-divider class='my-5' />
        <v-row class='px-5'>
          <h2>Результаты поиска по слову: "{{ getSearchText }}"</h2>
          <v-spacer />
          <v-btn @click='cleanSearch' color='teal' elevation='2' plain icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-divider class='my-5' />
        <BookList :books='getSearchBooks' @openBookForm='openBookDialog' />
      </div>
      <div v-else>
        <h2>Для поиска книг введите текст и нажмите кнопку "Отправить"</h2>
      </div>
    </div>
  </v-container>
</template>

<script>
import BookList from '~/components/BookList'
import SearchForm from '~/components/SearchForm'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'MainPage',
  components: { SearchForm, BookList },

  computed: {
    ...mapGetters('book', ['getLoading', 'getSearchBooks', 'getSearchText'])
  },

  methods: {
    ...mapActions('book', ['setBooks']),
    ...mapMutations('book', ['cleanSearch']),
    searchBooks(text) {
      this.setBooks(text)
    },
    openBookDialog(book) {
      this.currentBook = book
      this.dialogVisible = true
    }
  }
}
</script>

