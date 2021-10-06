<template>
  <v-container>
    <v-row >
      <BookItem v-for="book in books"
                :book="book"
                :key="book.id"
                @openBookForm="$emit('openBookForm', book)"
      />
    </v-row>
  </v-container>
</template>

<script>
import BookItem from "./BookItem";

export default {
  name: "BookList",
  components: {BookItem},
  props:['books'],

  mounted() {


  }
}
</script>

<style scoped>

</style>