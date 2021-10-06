<template>
  <v-container>
    <SearchForm @searchBooks="searchBooks" :loading="getLoading"/>

    <v-dialog
        v-model="getLoading"
        hide-overlay
        persistent
        width="300"
    >
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div v-if="!getLoading">
      <div v-if="getSearchBooks.length>0">
        <v-divider class="my-5"/>
        <h2>Результат поиска по слову {{ getSearchText }}</h2>
        <v-divider class="my-5"/>
        <BookList :books="getSearchBooks" @openBookForm="openBookDialog"/>
      </div>
      <div v-else>
        <h2>Для поиска книг введите текст и нажмите кнопку отправить</h2>
      </div>
    </div>

    <BookDialog  v-model="dialogVisible" :book="currentBook" />
  </v-container>
</template>

<script>
import BookList from "../components/BookList";
import SearchForm from "../components/SearchForm";
import BookDialog from "../components/BookDialog";
import {mapGetters, mapActions, mapState} from 'vuex'

export default {
  name: "MainPage",
  components: {BookDialog, SearchForm, BookList},
  data: () => (
      {
        //books: [],
        searchText: '',
        currentBook: {},
        //loading: false,
        dialogVisible: false
      }
  ),
  computed: {
    ...mapGetters(['getLoading', 'getSearchBooks','getSearchText']),
    ...mapState(['loading', 'books'])
  },

  methods: {
    ...mapActions(['setBooks']),
    searchBooks(text) {
      // this.loading = true
      // setTimeout(() => {
      //   this.axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
      //       .then(res => {
      //         this.books = res.data.items
      //         this.searchText = text
      //         this.loading = false
      //       })
      //       .catch(() => this.loading = false)
      // }, 500)
      this.setBooks(text)
    },
    openBookDialog(book) {
      this.currentBook = book
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>